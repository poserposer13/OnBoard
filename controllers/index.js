const router = require('express').Router();

// Export the router
module.exports = function (gfs, upload) {
    // Import our controllers
    const taskRoutes = require('./taskController');
    const userRoutes = require('./usersController');
    const authRoutes = require('./authController');
    const fileRoutes = require('./fileController')(gfs, upload);

    // Hook up to the router
    router.use('/api/tasks', taskRoutes);
    router.use('/api/users', userRoutes);
    router.use('/api/auth', authRoutes);
    router.use('/api/file', fileRoutes);
    return router;
};
