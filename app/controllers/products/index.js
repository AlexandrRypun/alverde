import ProductsController from '../products';

export default ProductsController.extend({
    queryParams: ['category', 'page'],
    category: null,
    page: null,
});
