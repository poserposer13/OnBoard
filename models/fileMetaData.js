const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileMetaDataSchema = new Schema(
    {
        filename: {
            type: String,
            trim: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);


const FileMetaData = mongoose.model('FileMetaData', fileMetaDataSchema);

module.exports = FileMetaData;