//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { getCategorias, getCategoriaPorId, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');
const { existeCategoriaPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { tieneRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/mostrar', getCategorias);

router.get('/mostrar/:id',[
    check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], getCategoriaPorId);


router.post('/agregar',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], postCategoria);

router.put('/editar/:id',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], putCategoria);



router.delete('/eliminar/:id',[
    validarJWT,
    check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], deleteCategoria);


module.exports = router;


// ROUTES