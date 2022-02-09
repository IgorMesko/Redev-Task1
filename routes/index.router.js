const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');

router.use('/redev', userRouter);

module.exports = router;
