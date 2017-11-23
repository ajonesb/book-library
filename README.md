# Book Library with ES6 Classes

This exercise involves using ES6 and Javascript Classes as well as applying Javascript Object Oriented Principles such as Polymorphism, Inheritance, Constructor, etc..

You have three categories of books: Horror, Action, Drama.

The idea is to create a table of books, with a search input.

If you write something at the input, it will filter the table.

You can add, edit, modify books.


** Create a book class which will have a "Category" attribute. 

** Treat them as the same object.


******************************************************************************************************************************************

- Install Node - https://nodejs.org/en/

- npm install  - https://www.npmjs.com/get-npm

- npm update

// Material Design for Layout - https://getmdl.io/started/index.html

- npm install -save material-design-lite

// Install JQuery to manipulate DOM (Use as module)

- npm install -save jquery

// system js for es6 modules and common.js, require.js modules

- npm install -save systemjs

- Run app - npm run dev 

- view app on http://localhost:3000/


*****************************************************************************************************************************

Developer Notes: 

- 10/11/2017

Note - For filter funcionality outside app, apply this working version outside app - https://codepen.io/ajonesb/pen/mqWMae?editors=1010

- 13/11/2017

Filter functionality now working on app. Added search filter function directly to library-data.js and used filter intput on index without module since it was causing issues to work properly as a module being imported and exported. 

- 21/11/2017

Final Functionality for editing, adding, deleting books added. Functionality is located on seperate js file for app at add-edit-remove-books.js

- Minor bug when updating books, doesn't update correctly. 


