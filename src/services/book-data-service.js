import {Book} from '../classes/books.js';
import {DataError} from './data-error.js';

export class BookDataService {

    constructor() {
        this.books = [];
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
           /*  c.miles = car.miles;
            c.make = car.make; */
            return c;
        } catch(e) {
            this.errors.push(new DataError('error loading book', book));
        }
        return null;
    }
    
    validateBookData(book) {
        let requiredProps = 'title category author'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!book[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, book));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}