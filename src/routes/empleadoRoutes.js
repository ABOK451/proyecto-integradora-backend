const express = require('express');
const router = express.Router();


const empleadoController = require('../controllers/empleadoController');

router.post('/', empleadoController.create);
router.get('/', empleadoController.getAll);
router.get('/:correo', empleadoController.getById);
router.put('/:correo', empleadoController.update);
router.delete('/:correo', empleadoController.delete);

module.exports = router;
