import {Book} from '../classes/book.js';
import {DataError} from './data-error.js';

export class BookDataService {

    constructor() {
        this.books = [];
        this.errors = [];       
    }    
    
     
    loadData(readings) {
        for (let data of readings) {
            switch(data.type) {
                case 'book':
                    if (this.validateBookData(data)) {
                        let book = this.loadBook(data);
                        if (book) 
                            this.books.push(book);
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
            let c = new Book(book.title, book.category, book.type);
            c.miles = book.author;
            return c;
        } catch(e) {
            this.errors.push(new DataError('error loading book', book));
        }
        return null;
    }
    
    validateBookData(book) {
        let requiredProps = 'title category author type'.split(' ');
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
