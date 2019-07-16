import Route from '@ember/routing/route';
import chunk from 'chunk';

export default Route.extend({
    queryParams: {
        category: {
            refreshModel: true
        },
        page: {
            refreshModel: true
        }
    },

    async model(params) {
        const products = await this.store.query('product', params);
        return chunk(products, 2);
    }
});
