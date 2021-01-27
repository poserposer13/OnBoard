const router = require('express').Router();
// const db = require('../models');

module.exports = function (gfs, upload) {
    // @route GET /
    // @desc Loads form
    router.get('/', (req, res) => {
        gfs.files.find().toArray((err, files) => {
            // Check if files
            if (!files || files.length === 0) {
                res.render('index', { files: false });
            } else {
                files.map((file) => {
                    if (
                        file.contentType === 'image/jpeg' ||
                        file.contentType === 'image/png'
                    ) {
                        file.isImage = true;
                    } else {
                        file.isImage = false;
                    }
                });
                res.render('index', { files: files });
            }
        });
    });

    // POST/upload route
    router.post('/upload', upload.single('img'), (req, res) => {

        res.json({ file: req.file });
    });

    // @route GET /files
    // @desc  Display all files in JSON
    router.get('/file', (req, res) => {
        gfs.files.find().toArray((err, files) => {
            // Check if files
            if (!files || files.length === 0) {
                return res.status(404).json({
                    err: 'No files exist',
                });
            }

            // Files exist
            return res.json(files);
        });
    });

    // @route GET /files/:filename
    // @desc  Display single file object
    router.get('/file/:filename', (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            // Check if file
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No file exists',
                });
            }
            // File exists
            return res.json(file);
        });
    });

    // @route GET /image/:filename
    // @desc Display Image
    router.get('/image/:filename', (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
            // Check if file
            if (!file || file.length === 0) {
                return res.status(404).json({
                    err: 'No file exists',
                });
            }

            // Check if image
            if (
                file.contentType === 'image/jpeg' ||
                file.contentType === 'image/png'
            ) {
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

    router.delete('/mydocuments/file/:filename', (req, res) => {
        gfs.remove({ id: req.params.id, root: 'uploads' }, (err) => {
            if (err) {
                return res.status(404).json({ err: err });
            }

            res.redirect('/mydocuments');
        });
    });

    return router;
};
