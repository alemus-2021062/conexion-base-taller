const {request, response} = require('express');
const Producto = require('../models/producto')


const getProductos = async(req = request, res = response) =>{
    res.json({
        msg: 'Hola mundo get'
    })
}

const getProductoPorId = async(req = request, res = response) =>{
    res.json({
        msg: 'Hola mundo getById'
    })
}

const postProducto = async(req = request, res = response) =>{
    
    const {estado, usuario, ...body} = req.body
    const productoDB = await Producto.findOne({nombre: body.nombre}) 
    
    if (productoDB) {
        return res.status(400).json({
            msg: `El producto ${productoDB.nombre} ya existe en la base`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const producto = await Producto(data);

    await producto.save();

    res.status(201).json(
        'Se agrego correctamente el producto'
    )

}

const putProducto = async(req = request, res = response) => {
    
res.json({
    msg: 'Hola mundo put'
})

   
}

const deleteProducto = async(req = request, res = response) => {
  
    res.json({
        msg: 'Hola mundo delete'
    })
}









module.exports = {
    getProductos,
    getProductoPorId,
    postProducto,
    putProducto,
    deleteProducto
}