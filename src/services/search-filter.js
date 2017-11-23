// NOT USED SINCE ADDED EASIER FUNCTIONALITY DIRECTLY ON DATA FOR LIBRARY-DATA.JS 

/* import {library} from '../library-data.js'; 
import {Book} from '../classes/book.js';
import {Magazine} from '../classes/magazine.js';
import {SearchInput} from '../ui/search-input.js';
import {BaseElement} from '../ui/base-element.js';


export class SearchFilterService {
    constructor() {
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
    }
}
 */
