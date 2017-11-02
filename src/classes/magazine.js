import {ReadingMaterial} from './reading-material.js';

export class Magazine extends ReadingMaterial {
    
    constructor(title, category, type) {
        super(title, category, type);
        this.editor = null;
        this.frequency = null;
    }
}

    
