require('dotenv').config();

// Configuration check.
// Disable this at your own risk
require('./utils/verifyConfiguration')();
// Requiring necessary npm packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
// Requiring our routes
const routes = require('./controllers');
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
// Bringing in Morgan, a nice logger for our server
const morgan = require('morgan');
// Compression
const compression = require('compression');
// Creating express app
const app = express();

// Set up our middleware!
// Dev Logging. Only works in test or development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}

app.use('/admin', require('./utils/admin'));

// enable compression middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Add all our backend routes
app.use(routes);

const conn = mongoose.createConnection('mongodb://localhost/project3');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Init gfs
let gfs;

conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
    console.log('Connection Successful');
});

// Create Storage Engine
const storage = new GridFsStorage({
    url: 'mongodb://localhost/project3',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                };
                resolve(fileInfo);
            });
        });
    },
});
const upload = multer({ storage });

// POST/upload route
// 'file' is the name of the input form for the front-end where user uploads files
app.post('/file', upload.single('img'), (req, res) => {
    console.log(req);
    res.status(201).json(req.file);
});

app.get('/file/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'No file exists',
            });
        }

        // Check if image
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image',
            });
        }
    });
});

app.listen(PORT, function () {
    console.log(`Server now on port ${PORT}!`);
});
