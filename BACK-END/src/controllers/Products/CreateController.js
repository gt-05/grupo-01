const ProductModel = require('../../models/ProductModel');
const ProductImageModel = require('../../models/ProductImageModel')
const fs = require('fs')
const path = require("path");
const { saveByUrl } = require('../../services/Product-images')

module.exports = async (request, response) => {
    let {
        name,
        slug,
        price
    } = request.body;

    let product;
try {
     product = await ProductModel.create({
        name, slug, price
    });

   
} catch (error){
    response.status(400);
    return response.json({
        message: "Erro ao criar produto"
    });
}
    
    
try {
    let images = [];
    for (let  url of request.body.images) {
        let {relativePath} = await saveByUrl({url, slug}); images.push({
            product_id: product.id,
            path: relativePath
        });
    }
} catch (error) {
    response.status(400);
    return response.json({
        message: "Erro ao salvar imagens no produto no produto " + product.id
    });
    
}
    
    response.status(201);
    return response.json(product);
}