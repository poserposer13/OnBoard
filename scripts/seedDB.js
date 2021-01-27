const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

let taskSeed = [
    {

        type: 'documentupload',
        title: 'Please upload a document.',

    },
    {

        type: 'policyreview',
        title: 'You have a policy to review. Please sign.',

    },
    {

        type: 'trainingvideo',
        title: 'Review our safety training video.',


    },
    {

        type: 'team',
        title: 'Get acquainted with your team.',

    },

];

db.User.find().then(users => {
    const user = users[0];
    taskSeed.forEach(task => task.user = user._id);
    db.Task
        .remove({})
        .then(() => db.Task.collection.insertMany(taskSeed))
        .then(data => {
            console.log(data.result.n + ' tasks inserted!');
            process.exit(0);
        });
})

    .catch(err => {
        console.error(err);
        process.exit(1);
    });
