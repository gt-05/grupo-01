const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes')
const AllProductsController = require('../controllers/Products/AllProductsControler');
const CreateController = require("../controllers/Products/CreateController");
const UpdateController = require('../controllers/Products/UpdateController');
const ListImagesController = require('../controllers/Products/AllImagesController');
const GetBySlug = require('../controllers/Products/GetBySlug')
const CreateImagesController = require('../controllers/Products/CreateImagesController')
const UpdateImagesController = require('../controllers/Products/UpdateImagesController')
const CreateCategoryController = require('../controllers/Products/CreateCategoryController')
const AllCategoryController = require('../controllers/Products/AllCategoryController')
const AllOptionsController = require('../controllers/Products/AllOptionsController')
const CreateOptionsController = require('../controllers/Products/CreateOptionsController');
const DeleteController = require('../controllers/Products/DeleteController')
const DeleteOptions = require('../controllers/Products/DeleteOptions');
const UpdateOptions = require('../controllers/Products/UpdateOptions');
const DeleteImageController = require('../controllers/Products/DeleteImageController');
const GetByIdCategory = require('../controllers/Products/GetByIdCategory');
const DeleteCategory = require('../controllers/Products/DeleteCategory');
const UpdateCategory = require('../controllers/Products/UpdateCategory') 

// Rota ControllerProduto Lista
publicRoutes.get("/products",AllProductsController);
publicRoutes.get('/products/:id/images',ListImagesController);
publicRoutes.get('/products/:id/options',AllOptionsController);
publicRoutes.get('/categories',AllCategoryController);
publicRoutes.get('/categories/:id',GetByIdCategory);
publicRoutes.get('/products/:slug',GetBySlug);

// Rota ControllerProduto create
privateRoutes.post('/products',CreateController);
privateRoutes.post('/products/categories',CreateCategoryController);
privateRoutes.post('/products/:id/options', CreateOptionsController);
privateRoutes.post('/products/:id/images',CreateImagesController);

// Rota ControllerProduto upgrade
privateRoutes.put('/products/:Productid/options/:id',UpdateOptions)
privateRoutes.put('/products/:id',UpdateController);
privateRoutes.put('/products/:id/images/:imageId',UpdateImagesController);
privateRoutes.put('/categories/:id',UpdateCategory);

// Rota ControllerProduto delete
privateRoutes.delete('/products/:id',DeleteController);
privateRoutes.delete('/products/:Productid/options/:id', DeleteOptions);
privateRoutes.delete('/products/:productId/images/:id',DeleteImageController);
privateRoutes.delete('/categories/:id',DeleteCategory);

module.exports = [publicRoutes, privateRoutes];