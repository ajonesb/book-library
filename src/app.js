import $ from 'jquery';
import {Books} from './classes/books.js';
import {library} from './library-data.js';
import {BookDataService} from './services/book-data-service.js';
import {DataTable} from './ui/data-table.js';

let headers = "Title Category Author".split(' ');
let dataService = new BookDataService();
dataService.loadData(library);
let dt = new DataTable(headers, dataService.books);

dt.appendToElement($('body'));
