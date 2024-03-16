const Sede = require('../models/Sede');

const sedeController = {
  create: async (req, res) => {
    try {
      const nuevaSede = new Sede(req.body);
      const sedeGuardado = await nuevaSede.save();
      res.status(201).json({
        message: 'Sedecreado exitosamente',
        sedeId: sedeGuardado._id
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la sede', detalle: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const sedes = await Sede.find();
      res.status(200).json(sedes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todas las sedes', detalle: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const sede = await Sede.findById(req.params.id);
      if (sede) {
        res.status(200).json(sede);
      } else {
        res.status(404).json({ error: 'Sede no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la Sede', detalle: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const SedeActualizada = await Sede.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (SedeActualizada) {
        res.status(200).json(SedeActualizada);
      } else {
        res.status(404).json({ error: 'Sede no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la Sede', detalle: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const sedeEliminada = await Sede.findByIdAndDelete(req.params.id);
      if (sedeEliminada) {
        res.status(200).json({
          message: 'Sede eliminada exitosamente',
          sedeId: sedeEliminada._id
        });
      } else {
        res.status(404).json({ error: 'Sede no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la Sede', detalle: error.message });
    }
  }
};

module.exports = sedeController
