const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');
const registerUser = require('./registr.router');

router.use('/redev', userRouter);
router.use('/registration', registerUser);

module.exports = router;
