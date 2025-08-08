import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DashboardRoute extends Route {
    @service('library-data') library;

    beforeModel() {
        const storedBooks = localStorage.getItem('books');
        if(!storedBooks){
            localStorage.setItem('books', JSON.stringify(this.library.books));
        }
        
    }
}
