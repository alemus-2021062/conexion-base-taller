



const getUsuario = async(req = request, res = response) =>{
    const query = {estado:true};

    const listaCategorias = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
    ])

    res.json({
        msg : 'Mostrar Categoria',
        listaCategorias

    })
}