import {BaseElement} from './base-element.js';
/* import {library} from '../library-data.js';  */

export class SearchInput extends BaseElement {
        constructor(search) {
            super();
            this.search = search;
        }

        getElementString() {
            return `<input type="text" id="searchInput" onkeyup="searchBooks()" placeholder="Search for names.." title="Type in a name">
`
        }
       
        searchBooks(library) {
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