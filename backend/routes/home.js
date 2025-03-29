const express = require('express')
const router = express.Router()
const home = require('../controller/home')
const auth = require('../controller/auth');


router.get('/',home.indexPage)
router.get('/docs',home.docsPage)

module.exports = router