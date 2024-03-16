const express = require('express');
const router = express.Router();
let cors = require('cors')
const bodyparser = require('body-parser') 
router.use(express.json());

router.use(cors());
router.use(bodyparser.json())
router.use(bodyparser.urlencoded({extended:false}))

const empleadoRoutes = require('./empleadoRoutes');
const departamentoRoutes = require('./departamentoRoutes');
const administradorRoutes = require('./administradorRoutes');
const historialRoutes = require('./historialhorariosRoutes');
const horarioRoutes = require('./solicitudhorarioRoutes');
const vacacionesRoutes = require('./solicitudvacacionesRoutes');
const turnoRoutes = require('./turnoRoutes');
const correoRoutes = require('./correoRoutes');
const contratosRouter = require('./contratosRoutes');
const areaRoutes = require('./areaRoutes')
const sedeRoute = require('./sedeRoutes')



router.use('/empleado', empleadoRoutes);
router.use('/departamento', departamentoRoutes);
router.use('/administrador', administradorRoutes);
router.use('/historial', historialRoutes);
router.use('/horario', horarioRoutes);
router.use('/vacaciones', vacacionesRoutes);
router.use('/turno', turnoRoutes);
router.use('/envio', correoRoutes)
router.use('/contrato', contratosRouter);
router.use('/area', areaRoutes)
router.use('/sedes', sedeRoute)




module.exports = router;