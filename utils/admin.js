const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');

const User = require('../models/user');
const Task = require('../models/task');
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [
        {
            resource: User,
            options: {
                // for later
            },
        },
        {
            resource: Task,
            options: {
                // for later
            }
        }
    ],
});

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
