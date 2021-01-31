const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const policySchema = new Schema(
    {
        title: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: () => new Date()
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);


const Policy = mongoose.model('Policy', policySchema);

module.exports = Policy;