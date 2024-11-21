const ProductModel = require('../models/ProductModel');
const ProductImageModel = require('../models/ProductImageModel');
const CategoryModel = require('../models/CategoryModel');
const ProductCategoryModel = require('../models/ProductCategoryModel');
const UserModel = require('../models/UserModel');
const ProductOptionsModel = require('../models/ProductOptionsModel')
async function execute() {
    await UserModel.sync();
    await ProductModel.sync();
    await ProductImageModel.sync();
    await CategoryModel.sync();
    await ProductCategoryModel.sync();
    await ProductOptionsModel.sync();
}

execute();
