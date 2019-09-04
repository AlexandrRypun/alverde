import Route from '@ember/routing/route';

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
        return this.store.query('product', { include: ['category', 'translations', 'images'], ...params });
    }
});
