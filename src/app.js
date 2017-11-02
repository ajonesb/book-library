import $ from 'jquery';
import {library} from './library-data.js';
import {BookDataService} from './services/book-data-service.js';
import {DataTable} from './ui/data-table.js';

let headers = "Title Category Type Author".split(' ');
let dataService = new BookDataService();
dataService.loadData(library);
let dt = new DataTable(headers, dataService.books);

dt.appendToElement($('body'));
