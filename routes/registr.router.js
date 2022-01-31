const express = require('express');
const router = express.Router();
const registrControllers = require('../controllers/registr.controllers');

router.post('/create', async (req, res) => {
    try {
        const user = await registrControllers.createUser(req.body);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
}); 

module.exports = router;