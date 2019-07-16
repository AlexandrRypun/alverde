import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['category', 'page'],
    category: null,
    page: null,
});
