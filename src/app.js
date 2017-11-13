// JQuery 
import $ from 'jquery';

// Classes
import {Book} from './classes/book.js';
import {Magazine} from './classes/magazine.js';
import {ReadingMaterial} from './classes/reading-material.js';

// Data Objects
import {library} from './library-data.js';

// Services
import {BookDataService} from './services/book-data-service.js';

// UI
import {DataTable} from './ui/data-table.js'; 
import {BaseElement} from './ui/base-element.js';



/* 
const b = new SearchInput(); 
b.appendToElement($('body')); */ 
const headers = "Title Category Type Author".split(' ');
let dataService = new BookDataService();
dataService.loadData(library);
const dt = new DataTable(headers, dataService.books);
dt.appendToElement($('body'));


/* console.log(library); */
/* const sb = new searchBooks(book); */
