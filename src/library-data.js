
// Classes
import {Book} from './classes/book.js';
import {Magazine} from './classes/magazine.js';
import {ReadingMaterial} from './classes/reading-material.js';

// Services
import {BookDataService} from './services/book-data-service.js';

// UI
import {BaseElement} from './ui/base-element.js';
import {DataTable} from './ui/data-table.js';


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
    },
    {
        title: 'The Raven',
        category: 'Horror',
        author: 'Edgar Allan Poe',
        type: 'book',
        published: '1845'
    },
    {
        title: 'The Shining',
        category: 'Horror',
        author: 'Stephen King',
        type: 'book',
        published: '1977'
    },
    {
        title: 'Salems Lot',
        category: 'Horror',
        author: 'Stephen King',
        type: 'book',
        published: '1975'
    },
    {
        title: 'Silence of the Lambs',
        category: 'Horror',
        author: ' Thomas Harris',
        type: 'book',
        published: '1988'
    },
     {
        title: 'Rosemarys Baby',
        category: 'Horror',
        author: 'Ira Levin',
        type: 'book',
        published: '1967'
    },
    {
        title: 'Macbeth',
        category: 'Drama',
        author: 'William Shakespeare',
        type: 'book',
        published: '1606'
    },
    {
        title: 'The Lord of the Rings',
        category: 'Action',
        author: 'Chuck Wendig',
        type: 'book',
        published: '1954'
    },
    {
        title: 'Star Wars - The Force Awakens',
        category: 'Drama',
        author: 'J. R. R. Tolkien',
        type: 'book',
        published: '2016'
    }
                    
];


 // Apply Search Filter Functionality
$('#myInput').keyup(function(){
   let valThis = $(this).val().toLowerCase();
    if(valThis == ""){
        $('tbody > tr').show();           
    } else {
        $('tbody > tr').each(function(){
            let text = $(this).text().toLowerCase();
            (text.indexOf(valThis) >= 0) ? $(this).show() : $(this).hide();
        });
   };
});



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



// show dynamically search input element 
/* let str = '<input id="myInput" placeholder="Search Books" title="Type in a name" type="text">';
let child = document.createElement('div');
child.innerHTML = str;
child = child.firstChild;
document.getElementById('myinput').appendChild(child); */  

/* document.getElementsByTagName("tr")[0].setAttribute("id", "myTable");  */


// Test to make sure app is able to print out library
// console.log(library); 


// Test to see if jQuery is loading 
/*  if (typeof jQuery == 'undefined') {  
    console.log('jQuery has not been loaded!');  
}
else {
    console.log('jQuery loaded!');
}  */


// Test to see if library-data is able to target #myInput
/* console.log($('#myInput').val())  */
