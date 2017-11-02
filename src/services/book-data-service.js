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
                case 'title':
                    if (this.validateBookData(data)) {
                        let title = this.loadBook(data);
                        if (title) 
                            this.title.push(title);
                    }
                    else {
                        let e = new DataError('invalid book data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'category':
                    this.category.push(data);
                    break;
                case 'author':
                    this.author.push(data);
                    break;
            }
        }
    }
    
    loadBook(books) {
        try {
            let c = new Book(car.title, car.category, car.author);
          /*  c.title = car.title;
           c.category = car.category;
           car.author = car.author; */
            return c;
        } catch(e) {
            this.errors.push(new DataError('error loading book', books));
        }
        return null;
    }
    
    validateBookData(books) {
        let requiredProps = 'title category author'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!books[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, books));
                hasErrors = true;
            }
        }
        return !hasErrors;
    }
}
