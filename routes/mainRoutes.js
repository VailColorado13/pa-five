const { application } = require('express')
const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/', mainController.pageLoad)
router .get('/downloadNewEstimate', mainController.sendEstimate)
router.get('/written', mainController.pageLoadWithTableData)
//router.post('/upload' , mainController.uploadFiles)
router.post('/createJob' , mainController.createJob)
router.get('/readFiles', mainController.readFiles)
router.get('/generateSessionReport' , mainController.generateSessionReport)

module.exports = router