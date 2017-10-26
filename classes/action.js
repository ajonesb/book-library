import {Book} from './book.js';

export class Action extends Book {
    
    constructor(author, title) {
        super(author, title);
        this.author = null;
        this.title = null;
    }
}