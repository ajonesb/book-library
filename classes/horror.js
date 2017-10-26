import {Book} from './book.js';

export class Horror extends Book {
    
    constructor(author, title) {
        super(author, title);
        this.author = null;
        this.title = null;
    }
}