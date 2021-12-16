const express = require('express')
const router = express.Router()

const controller = require('../controller/testConection.controller')

router.get('/testConection', controller.get)

module.exports = router;
