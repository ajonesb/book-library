import {Book} from './book.js';

export class Action extends Book {
    
    constructor(author, title, category) {
        super(author, title, category);
        this.author = null;
        this.title = null;
        this.category = null;
    }
}