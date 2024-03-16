const express = require('express');
const router = express.Router();


const sedeController= require('../controllers/sedeController');

router.post('/', sedeController.create);
router.get('/', sedeController.getAll);
router.get('/:id', sedeController.getById);
router.put('/:id', sedeController.update);
router.delete('/:id', sedeController.delete);

module.exports = router;