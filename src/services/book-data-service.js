// Classes
import {Book} from '../classes/book.js';
import {Magazine} from '../classes/magazine.js';

// Services
import {DataError} from './data-error.js';



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


   /*  searchBooks(book) {
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
    }  */

     

    /*  searchBooks(book) { 
        let input, filter, table, tr, td, i;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
            }       
        }
            console.log(library); 
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
