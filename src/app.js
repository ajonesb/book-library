/* import $ from 'jquery'; */
import {Book} from './classes/book.js';
import {Drama} from './classes/drama.js';
import {Horror} from './classes/horror.js';
import {Action} from './classes/action.js';
import {library} from './book-library.js';
import {BookTableService} from './services/book-table-service.js';

//Testing
/* let bookService = new BookTableService();
bookService.loadData(book); */

/* let c = new Book();
console.log(c instanceof Book); */

/* let c = new Book();
let d = new Romance();

console.log(c);
console.log(d); */

// we are getting our objects on the dom
// console.log(library);

//instantiate our data service 
let bookService = new BookTableService();
//create a new method on bookService called loadData
bookService.loadData(library); // must go into service and implement loadData

/* console.log(bookService.action); // load all action objects*/

// loop through bookService action 
for (let library of bookService.library)
    console.log(bookService.library);
    
