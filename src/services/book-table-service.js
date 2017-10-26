import {Action} from '../classes/action.js';
import {Horror} from '../classes/horror.js';
import {Romance} from '../classes/romance.js';

export class BookTableService {

    constructor() {
        this.book = [];
        this.action = [];
        this.horror = [];
        this.romance = [];
    }

    // get book by author 
    getBookByAuthor(author) {
        return this.book.find(function(book){
            return book.author === author;
        });
    }

    
   


}
