import express from 'express';
import {
  createCliente,
  deleteCliente,
  getCliente,
  getClientes,
  updateCliente,
} from '../controllers/clienteController.js';
import {
  createMunicipio,
  deleteMunicipio,
  getMunicipio,
  getMunicipios,
  updateMunicipio,
} from '../controllers/municipioController.js';
const router = express.Router();

// rutas para las vistas
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/clientes', (req, res) => {
  (async () => {
    await getClientes(req, res);
  })();
});
router.get('/clientes/:id', (req, res) => {
    (async () => {
      await getCliente(req, res);
    })();
  });
router.get('/municipios', (req, res) => {
  (async () => {
    await getMunicipios(req, res);
  })();
});
router.get('/municipios/:id', (req, res) => {
    (async () => {
      await getMunicipio(req, res);
    })();
  });

router.post('/clientes', (req, res) => {
  createCliente(req, res);
});
router.post('/clientes/update/:id', (req, res) => {
  updateCliente(req, res);
});
router.get('/clientes/delete/:id', (req, res) => {
  deleteCliente(req, res);
});
router.post('/municipios', (req, res) => {
  createMunicipio(req, res);
});

router.post('/municipios/update/:id', (req, res) => {
  updateMunicipio(req, res);
});

router.get('/municipios/delete/:id', (req, res) => {
  deleteMunicipio(req, res);
});
export default router;
