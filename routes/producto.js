//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { postProducto, putProducto, deleteProducto } = require('../controllers/producto');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//router.get('/mostrar', getProductos);

// router.get('/mostrar/:id',[
//     check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
//     check('id').custom(existeCategoriaPorId),
//     validarCampos
// ], getProductoPorId);


router.post('/agregar',
// [
//     validarJWT,
//     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//     validarCampos
// ], 
postProducto);

router.put('/editar/:id',
// [
//     validarJWT,
//     check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//     check('id').custom(existeCategoriaPorId),
//     validarCampos
// ], 
putProducto);



router.delete('/eliminar/:id',
// [
//     validarJWT,
//     check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
//     check('id').custom(existeCategoriaPorId),
//     validarCampos
// ], 
deleteProducto);


module.exports = router;


// ROUTES