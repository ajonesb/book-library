import {Book} from '../classes/book.js';
import {Magazine} from '../classes/magazine.js';
import {DataError} from './data-error.js';
import {SearchInput} from '../ui/search-input.js';

export class BookDataService {

    constructor() {
        this.books = [];
        this.magazines = [];
        this.errors = [];
        this.search = [];       
    }    
    
     
    loadData(readings) {
        for (let data of readings) {
            switch(data.type) {
                case 'book':
                    if (this.validateBookData(data)) {
                        let book = this.loadBook(data);
                        if (book) 
                            this.books.push(book);
                    }
                    else {
                        let e = new DataError('invalid book data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'magazine':
                    this.magazines.push(data);
                    break; 
                default:
                let e = new DataError('Invalid reading material type', data);
                this.errors. push(e);
                break;                          
            }
        }
    }
    
    loadBook(book) {
        try {
            let c = new Book(book.title, book.category, book.type);
            c.author = book.author;
            c.published = book.published;        
            return c;
        } catch(e) {
            this.errors.push(new DataError('error loading book', book));
        }
        return null;
    }



   /* removeBook(book) {
        this.book.addEventListener('click', function(book) {
            // make sure it's a <li> that gets removed
            if(book.target.nodeName === 'td') {
            this.lastRemoved.push({action: 'remove', content: book.target});
            this.el.removeChild(book.target);
            }
        }.bind(this));
    }  */


   /* removeBook(book) {
        let tr = document.getElementsByTagName('td');
        for (let i=0;i<x.length;i++) {
            x[i].onclick = function(){ this.book = ''; }
        }
    }; */

/* 
    searchBooks(book) {
        table = document.getElementsById("books");
            let render_lists = function(lists){
            let tr = "";
            for(index in lists){
                tr += "<td>" + lists[index] + "</td>";
            }
            ul.innerHTML = tr;
            }

            render_lists(library);

            // lets filters it
            input = document.getElementById('filter_users');

            let filterUsers = function(event){
            keyword = input.value.toLowerCase();
            filtered_users = users.filter(function(library){
                    user = user.toLowerCase();
                return user.indexOf(keyword) > -1; 
            });
            
            render_lists(filtered_users);
            }

            input.addEventListener('keyup', filterUsers);
    } */

     

/*      searchBooks(library) {
       var $rows = $('#table tr');
        $('#search').keyup(function() {
            var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
            
            $rows.show().filter(function() {
                var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                return !~text.indexOf(val);
            }).hide();
        });
    }  */

    

    validateBookData(book) {
        let requiredProps = 'title category author type'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!book[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, book));
                hasErrors = true;
            }
        }
        
        return !hasErrors;
    }
}
