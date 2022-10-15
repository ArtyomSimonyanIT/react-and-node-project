const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController.js')

router.get('/users', apiController.getUsers);
router.delete('/users', apiController.delUser);
router.get('/computers', apiController.getComputers);
router.delete('/computers', apiController.delComputer);
router.post('/computers', apiController.addComputers);
router.get('/notebooks', apiController.getNotebooks);
router.delete('/computers', apiController.delNotebook);
router.post('/computers', apiController.addNotebooks);


module.exports = router