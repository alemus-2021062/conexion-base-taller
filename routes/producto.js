//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { postProducto, putProducto, deleteProducto, getProductos, getProductoPorId } = require('../controllers/producto');
const { existeProductoPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { tieneRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/mostrar', getProductos);

router.get('/mostrar/:id',[
    check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], getProductoPorId);


router.post('/agregar',
[
    validarJWT,
    tieneRole('ADMIN_ROLE', 'PROFE_ROLE'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(existeProductoPorId),    
    validarCampos
], 
postProducto);

router.put('/editar/:id',
[
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeProductoPorId),
    validarCampos
], 
putProducto);



router.delete('/eliminar/:id',
[
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'El id que usas no es uno valido de MongoDB').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], 
deleteProducto);


module.exports = router;


// ROUTES