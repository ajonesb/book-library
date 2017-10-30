// This class manages all books that we get from a data feed

import {Action} from '../classes/action.js';
import {Horror} from '../classes/horror.js';
import {Drama} from '../classes/drama.js';

export class BookTableService {

    constructor() {
        this.action = [];
        this.horror = [];
        this.drama = [];
    }

    loadData(library) {
        //loop through array with for of statement 
        for (let data of library) { // set variable called data, don't know what category your getting
                switch(data.type) {
                    case 'library':
                        let library = this.loadLibrary(data);
                        this.library.push(library);
                        break;
                    /* case 'horror':
                        this.horror.push(data);
                        break;
                    case 'drama':
                        this.drama.push(data);
                        break; */
                }
        }

    }

    loadLibrary(library) { // instantiate action 
        let c = new library(action.author, action.title, action.category);
        return c; // return action created 
    }

}
