const ProductImageModel = require('../../models/ProductImageModel');

module.exports = async (request, response) => {
    let images;
    try{
        images = await ProductImageModel.findAll({
            attributes: ['url','id','path'],
            where: {
                product_id: request.params.id
            }
        });
        
        return response.json(images);

    }catch(error){
        response.status(400)
        return response.json({
            message: "Erro ao exibir imagens" 
        });
    }   
}