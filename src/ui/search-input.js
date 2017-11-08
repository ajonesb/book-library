import {BaseElement} from './base-element.js';
import {library} from '../library-data.js'; 
import {Book} from '../classes/book.js';
import {Magazine} from '../classes/magazine.js';


export class SearchInput extends BaseElement {

      getElementString() {
        return `<input type="text" id="searchInput" onkeyup="searchBooks()" placeholder="Search for names.." title="Type in a name">
        <`
    }
        /* constructor() {
            super();
            this.searchBooks = function(library) {
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
            }
    } */

        //Troubleshooting For Search Filter Functionality

        /*****************************************************************************
        - Is the method searchBooks (which originally works as function pulling the array of objects 
        from a static html table) pulling the array objects from library-data.js? 

        - Is search-input.js able to talk to library-data.js? Yes, it's being imported 
        with import {library} from '../library-data.js' up top. 

        - Uncaught ReferenceError: searchBooks is not defined at HTMLInputElement.onkeyup 
        ((index):1) (trying to call function but can't find it.) Maybe call on app.js but how?

                  
        ****************************************************************************/
    
}

// Comes back undefined, interesting..
/* console.log(library); */
