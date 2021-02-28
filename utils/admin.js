const AdminBro = require('admin-bro');
const AdminBroExpress = require('admin-bro-expressjs');
const AdminBroMongoose = require('@admin-bro/mongoose');
const bcrypt = require('bcryptjs');
const Policy = require('../models/policy');
const User = require('../models/user');
const Task = require('../models/task');
const FileMetaData = require('../models/fileMetaData');
AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [
        {
            resource: User,
            options: {
                properties: {
                    password: {
                        isVisible: true,
                    }
                },
            },
        },
        {
            resource: Task,
            options: {
                // config
            }
        },
        {
            resource: FileMetaData,
            options: {
                // config
            }
        },
        {
            resource: Policy,
            options: {
                // config
            }
        }
    ],
});


module.exports = adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
        const user = await User.findOne({ email });
        if (user) {
            const matched = await bcrypt.compare(password, user.password);
            if (matched) {
                if (user.isAdmin === true) {
                    return user;
                }
            } else {
                return false;
            }

        }
        return false;
    },
    // move to .env --------------------------------------------
    cookiePassword: 'some-secret-password-used-to-secure-cookie',
});

// condition to lock backend, do not include after if(matched) until production
// && user.isAdmin === true