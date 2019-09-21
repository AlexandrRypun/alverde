import EmberObject from '@ember/object';

export default {
    languages: EmberObject.create({
        'ua-ua': {
            fullName: 'Українська',
            shortName: 'Укр'
        },
        'ru-ru': {
            fullName: 'Русский',
            shortName: 'Рус'
        },
        'en-us': {
            fullName: 'English',
            shortName: 'Eng'
        }
    }),
    productsScheme: EmberObject.create({
        5: [3],
        6: [3, 4],
        7: [1, 4, 5],
        8: [3, 4],
        10: [3, 6],
        11: [3, 4, 8]
    }),
    notificationDuration: 4000,
    mobileMenuWidth: 991,
    paginationPageButtons: 5
}
