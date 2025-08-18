const express = require('express')
const router = express.Router()
const controller = require('../controllers/basicController')

//Get routes
router.get('/', controller.getRoot)
router.get('/get', controller.getSub)

//Post routes
router.post('/', controller.postRoot)
router.post('/post', controller.postSub)

//Put routes
router.put('/', controller.putRoot)
router.put('/put', controller.putSub)

//Delete routes
router.delete('/', controller.deleteRoot)
router.delete('/del', controller.deleteSub)

module.exports = router;