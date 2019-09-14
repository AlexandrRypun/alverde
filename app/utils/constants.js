import EmberObject from '@ember/object';

export default {
    languages: EmberObject.create({
        'ua-ua': 'Українська',
        'ru-ru': 'Русский',
        'en-us': 'English'
    }),
    productsScheme: EmberObject.create({
        5: [3],
        6: [3, 4],
        7: [1, 4, 5],
        8: [3, 4],
        10: [3, 6],
        11: [3, 4, 8]
    }),
    notificationDuration: 400000
}
