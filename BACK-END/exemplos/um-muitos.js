const ProductModel = require('../src/models/ProductModel');
const ProductImageModel = require('../src/models/ProductImageModel');
const ProductOptionsModel = require('../src/models/ProductOptionsModel');

ProductModel.hasMany(ProductImageModel, {foreignKey: "product_id", as: 'images'});
ProductModel.hasMany(ProductOptionsModel, {foreignKey: "product_id", as: 'options'});

async function execute() {
    let product = await ProductModel.findOne({
        include: {
            model: ProductOptionsModel,
            as: "options"
        }
    });
    console.log(product.options);
}

async function execute() {
    let product = await ProductModel.findOne({
        include: {
            model: ProductImageModel,
            as: "images"
        }
    });
    console.log(product.images[1].path);
}

execute();