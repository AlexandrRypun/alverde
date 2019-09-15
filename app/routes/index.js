import Route from '@ember/routing/route';

export default Route.extend({
    redirect() {
        this.transitionTo('products', { queryParams: { category: null, page: null } });
    }
});
