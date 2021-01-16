const router = require('express').Router();

// Import our controllers
const taskRoutes = require('./taskController');
const userRoutes = require('./usersController');
const authRoutes = require('./authController');

// Hook up to the router
router.use('/api/tasks', taskRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);

// Export the router
module.exports = router;
