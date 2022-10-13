const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController.js')

router.get('/users', apiController.getUsers);
router.delete('/users/:id', apiController.delUser);
router.get('/computers', apiController.getComputers);
router.delete('/computers/:id', apiController.delComputers);
router.get('/computers', apiController.addComputers);
router.get('/notebooks', apiController.getNotebooks);
router.delete('/computers/:id', apiController.delNotebooks);
router.get('/computers', apiController.addNotebooks);


module.exports = router