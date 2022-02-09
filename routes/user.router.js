const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');

router.get('/object', async (req, res) => {
    try {
        const user = await userControllers.getUsers();
        res.send(user);
    } catch (error) {
        console.log(error);
    };
});

router.get('/string/:id', async (req, res) => {
    try {
        const user = await userControllers.getUserFullName(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
});

router.get('/boolean/:id', async (req, res) => {
    try {
        const user = await userControllers.getUserIsAdmin(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
});

router.get('/number/:id', async (req, res) => {
    try {
        const user = await userControllers.getbankAccount(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
});

router.get('/null/:id', async (req, res) => {
    try {
        const user = await userControllers.getStatus(req.params.id);
        res.send(user);
    } catch (error) {
        console.log(error);
    };
});

module.exports = router;