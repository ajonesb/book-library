import {ReadingMaterial} from './reading-material.js';

export class Book extends ReadingMaterial {
    
    constructor(title, category, author) {
        super(title, category, author);
        this.type = null;
    }
}
