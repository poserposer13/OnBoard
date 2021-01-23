const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: () => new Date(),
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
