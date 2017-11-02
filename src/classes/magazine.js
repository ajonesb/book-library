import {ReadingMaterial} from './reading-material.js';

export class Magazine extends ReadingMaterial {
    
    constructor(title, category, author) {
        super(title, category, author);
        this.type = null;
    }
}