const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');
const ProductOptionsModel =require('../models/ProductOptionsModel');
const UsersModel = require('../models/UsersModel')

async function execute() {
    await ProductModel.sync();
    await ProductImageModel.sync();
    await CategoryModel.sync();
    await ProductCategoryModel.sync();
    await ProductOptionsModel.sync();
    await UsersModel.sync();
}

execute();