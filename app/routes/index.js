import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
    @service('router') router;
    @service session;

    beforeModel() {
        const user = this.session.currentUser;

        if (user) {
        if (user.role === 'admin') {
            this.router.replaceWith('admin'); 
        } else if (user.role === 'student') {
            this.router.replaceWith('student'); 
        } else {
            this.router.replaceWith('login-page');
        }
        } else {
        this.router.replaceWith('login-page');
        }
    }
}
