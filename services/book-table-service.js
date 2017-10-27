// This class manages all books that we get from a data feed

import {Action} from '../classes/action.js';
import {Horror} from '../classes/horror.js';
import {Romance} from '../classes/romance.js';

export class BookTableService {

    constructor() {
        this.action = [];
        this.horror = [];
        this.romance = [];
    }

}
