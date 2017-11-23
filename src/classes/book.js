import {ReadingMaterial} from './reading-material.js';

export class Book extends ReadingMaterial {
    
    constructor(title, category, type) {
        super(title, category, type);
        this.author = null; 
        this.published = null;
    }
}
