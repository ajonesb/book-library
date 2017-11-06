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
}
