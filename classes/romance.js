import {Book} from './book.js';

export class Romance extends Book {
    
    constructor(author, title) {
        super(author, title);
        this.author = null;
        this.title = null;
    }
}