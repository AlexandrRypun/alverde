import {A} from '@ember/array';
import EmberObject from '@ember/object';

export default {
    languages: A([
      EmberObject.create({key: 'ua-ua', value: 'Українська'}),
      EmberObject.create({key: 'ru-ru', value: 'Русский'}),
      EmberObject.create({key: 'en-us', value: 'English'})
    ])
}
