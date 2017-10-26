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

    loadData(book) {
        for (let data of book){
           switch(data.type) {
            case 'book':
               if (this.validateBookData(data)) {
                   let book = this.loadBook(data);
                   if (book)
                        this.books.push(book);
               }
               else     {
                   let e = new DataError('invalid book data', data);
                   this.errors.push(e);
               }
               break;
            case 'horror':
               this.horror.push(data);
               break;
            case 'action':
               this.action.push(data);
               break;
            case 'drama':
               this.drama.push(data);
               break;
            default:
               let e = new DataError('Invalid book', data);
               this.errors.push(e);
               break;
           }

        }
    }







}
