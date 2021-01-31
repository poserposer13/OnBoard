const mongoose = require('mongoose');
const db = require('../models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

let userSeed = [
    {
        email: 'admin@admin.com',
        password: 'admin',
        firstName: 'test',
        lastName: 'test',
        isAdmin: true,
        title: 'test',
        github: 'n/a',
        linkedin: 'n/a',
    }
];

let taskSeed = [
    {

        type: 'Document upload',
        title: 'In the documents section, please upload a completed I-9 form.',

    },
    {

        type: 'Policy review',
        title: 'In the policy section, please review the current policy documents, and acknowledge each once completed.',

    },
    {

        type: 'Training video',
        title: 'In the training section, please review our safety training video.',


    },
    {

        type: 'Team',
        title: 'In the team section, please view your new team members.',

    },

];

db.User.create(userSeed);


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
}).catch(err => {
    console.error(err);
    process.exit(1);
});
