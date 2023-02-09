
const {Router} = require('express');
const {getUsuarios, postUsuarios, putUsuarios, deleteUsuarios} = require('../controllers/categoria');
const router = Router();

router.get('/mostrar', getUsuarios);
router.post('/agregar', postUsuarios);
router.put('editar/:id', putUsuarios);
router.delete('eliminar/:id', deleteUsuarios);

module.exports = router;