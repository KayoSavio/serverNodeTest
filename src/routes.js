const router = require('express').Router();

const testController = require('@controller/test');

router
    .get('/',testController.helloWorld);

module.exports=router;