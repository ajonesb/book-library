import {Books} from '../classes/books.js';
import {DataError} from './data-error.js';

export class BookDataService {

    constructor() {
        this.categories = [];
        this.errors = [];       
    } 
    
     
    loadData(library) {
        for (let data of library) {
            switch(data.type) {
                case 'category':
                    if (this.validateBookData(data)) {
                        let category = this.loadBook(data);
                        if (category) 
                            this.category.push(category);
                    }
                    else {
                        let e = new DataError('invalid book data', data);
                        this.errors.push(e);
                    }
                    break;
            }
        }
    }
    
    loadBook(book) {
        try {
            let c = new Book(car.title, car.category, car.author);
          /*  c.title = car.title;
           c.category = car.category;
           car.author = car.author; */
            return c;
        } catch(e) {
            this.errors.push(new DataError('error loading category', category));
        }
        return null;
    }
    
    validateBookData(category) {
        let requiredProps = 'title category author'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!category[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, category));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}
