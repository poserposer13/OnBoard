const expressJwt = require('express-jwt');

module.exports = {
    // express-jwt handles decoding and checking the signature of our tokens for us
    // And nicely sticks the user in the request.
    isAuthenticated: expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
    isAdmin: function (req, res, next) {
        // If the user is logged in, continue with the request to the restricted route
        if (req.user.isAdmin) {
            return next();
        }

        // If the user isn't logged in, redirect them to the login page
        res.status(401).json({message: 'Oops! Looks like you got lost!'});
    }
};

