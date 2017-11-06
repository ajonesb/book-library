import $ from 'jquery';
import {Book} from './classes/book.js';
import {Magazine} from './classes/magazine.js';
import {library} from './library-data.js';
import {BookDataService} from './services/book-data-service.js';
import {DataTable} from './ui/data-table.js';
import {SearchInput} from './ui/search-input.js';

const b = new SearchInput();
b.appendToElement($('body'));
const headers = "Title Category Type Author".split(' ');
let dataService = new BookDataService();
dataService.loadData(library);
const dt = new DataTable(headers, dataService.books);
dt.appendToElement($('body'));
/* console.log(library); */
