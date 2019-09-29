import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    session: service(),
    store: service(),
    notifications: service(),
    intl: service(),
    tagName: 'ul',
    elementId: 'user-menu',
    registration: false,

    init(...args) {
        this._super(args);
        this.resetNewUser();
    },
    resetNewUser() {
        if (this.newUser) {
            this.newUser.deleteRecord();
        }
        this.set('newUser', this.store.createRecord('user', {}));
    },
    actions: {
        showLoginModal() {
            this.set('showModal', true);
        },
        async login() {
            try {
                const credentials = {
                    email: this.newUser.email,
                    password: this.newUser.password
                };
                const authenticator = 'authenticator:jwt';

                await this.session.authenticate(authenticator, credentials);
                this.set('showModal', false);
                this.notifications.success(this.intl.t('login.successfulLogin', { firstName: this.session.data.authenticated.tokenData.firstName }));
            } catch(err) {
                const errorType = err.status === 403 ? 'unsuccessfulLogin' : 'general';
                this.notifications.error(this.intl.t(`errors.${errorType}`));
            }
        },
        logout() {
            this.session.invalidate();
            this.set('showModal', false);
            this.set('newUser.email', null);
            this.set('newUser.password', null);
        },
        showRegistration() {
            this.set('registration', true);
        },
        showLogin() {
            this.set('registration', false);
        },
        onAttrChanged(attrName) {
            this.newUser.validate([attrName]);
        },
        async registerUser() {
            if (this.newUser.errors.length > 0) {
                return;
            }
            try {
                await this.newUser.save();
                this.notifications.success(this.intl.t('registration.userRegistered'));
                this.set('showModal', false);
                this.set('registration', false);
                this.resetNewUser();
            } catch (err) {
                if (err.code !== 422) {
                    this.notifications.error(this.intl.t('errors.general'));
                }
            }
        }
    }
});
