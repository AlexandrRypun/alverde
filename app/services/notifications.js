import NotificationsService from 'ember-cli-notifications/services/notification-messages-service';
import constants from 'bemiracle/utils/constants';

export default NotificationsService.extend({
    init(...args) {
        this._super(args);
        this.setDefaultAutoClear(true);
        this.setDefaultClearDuration(constants.notificationDuration);
    },
    success(message, options) {
        return this._super(message, { ...options, cssClasses: 'notification-message' });
    },
    error(message, options) {
        return this._super(message, { ...options, cssClasses: 'notification-message' });
    },
    info(message, options) {
        return this._super(message, { ...options, cssClasses: 'notification-message' });
    },
    warning(message, options) {
        return this._super(message, { ...options, cssClasses: 'notification-message' });
    }
});
