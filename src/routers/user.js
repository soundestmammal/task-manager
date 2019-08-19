const express = require('express');

const router = new express.Router();

router.get('/test', (req, res) => {
    res.send("This is from the user.js file")
})

module.exports = router;