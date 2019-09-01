const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token });

        // If unable to find a user then throw an error
        if(!user) {
            throw new Error();
        }

        req.user = user;
        req.token = token;
        next(); // Termination of the middleware, will hang if next isn't called.
    } catch(e) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}

module.exports = auth;