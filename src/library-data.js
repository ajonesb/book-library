import {Book} from './classes/book.js';
import {Magazine} from './classes/magazine.js';
import {SearchInput} from './ui/search-input.js';
import {BaseElement} from './ui/base-element.js';


export let library = [
    {
        title: 'IT',
        category: 'Horror',
        author: 'Stephen King',
        type: 'book',
        published: '1986'   
    },
    {
        title: 'The Bourne Identity',
        category: 'Action',
        author: 'Robert Ludlam',
        type: 'book',
        published: '2002'    
    },
    {
        title: 'National Geographic',
        category: 'Nature',
        type: 'Magazine',
        editor: 'Susan Goldberg',
        frequency: 'Monthly'
    },
    {
        title: 'Rolling Stone',
        category: 'Music',
        type: 'Magazine',
        editor: 'Jann Wenner',
        frequency: 'Monthly'
    },
    {
        title: 'The Hunger Games',
        category: 'Action',
        author: 'Suzanne Collins',
        type: 'book',
        published: '2002'
        
    },
    {
        title: 'Dracula',
        category: 'Horror',
        author: 'Bram Stroker',
        type: 'book',
        published: '1897'
        
    },
    {
        title: 'A Beautiful Mind',
        category: 'Drama',
        author: 'Silvia Nasar',
        type: 'book',
        published: '2001'
        
    },
    {
        title: 'Romeo and Juliet',
        category: 'Drama',
        author: 'William Shakespeare',
        type: 'book',
        published: '1597'
    },
    {
        title: 'Hamlet',
        category: 'Drama',
        author: 'William Shakespeare',
        type: 'book',
        published: '1609'
    }   
];

/* let libraryTest = library.filter(function (el) {
    return (el.category === "Music");
});

console.log(libraryTest); */

/* Outputs on console
{title: "Rolling Stone", category: "Music", type: "Magazine", editor: "Jann Wenner", frequency: "Monthly"}length: 1__proto__: Array(0) 

**********************************************************************************/

/* let filteredObjects = library.filter(function (el) {
    return (el.category === "Drama");
}).map(function(el) {
    return el.type;
}).sort();

console.log(filteredObjects); */

/*Outputs on console 
(3) ["book", "book", "book"]
0
:
"book"
1
:
"book"
2
:
"book"
length
:
3

**********************************************************************************/

// onkeyup and loop through arrays with filter to specific onkey typed.
// get the dom element and replace its content with the new values of the array
/* 
let FilteredResults = library.filter(function (el) {
    return (el);
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
});

console.log(FilteredResults); */

// apply search filter functionality
$('#myInput').keyup(function(){
   let valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('#myTable > tr').show();           
    } else {
        $('#myTable > tr').each(function(){
            let text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});

console.log(library); // good, we are able to communicate with app since showing on console

// show dynamically search input element 
/* let str = '<input id="myInput" placeholder="Search Books" title="Type in a name" type="text">';
let child = document.createElement('div');
child.innerHTML = str;
child = child.firstChild;
document.getElementById('myinput').appendChild(child);  */
//document.getElementsByTagName("tbody")[0].setAttribute("id", "myTable"); 

