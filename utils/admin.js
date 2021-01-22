const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const Task = require('../models/task');
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [
        {
            resource: User,
            options: {
                properties: {
                    password: {
                        isVisible: false,
                    }
                }
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


module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ email });
        if (user) {
            const matched = bcrypt.compare(password, user.password);
            if (matched && user.isAdmin === true) {
                return user;
            }
        }
        return false;
    },
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
});

