

const {Router} = require('express');
const { getCategorias, postCategorias, putCategorias, deleteCategorias } = require('../controllers/categoria')
const router = Router();

router.get('/mostrar', getCategorias)
router.post('/agregar', postCategorias)
router.put('/editar/:id', putCategorias)
router.delete('/eliminar/:id', deleteCategorias)

module.exports = router;