import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement {
    
    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    
    getElementString() {
     
        let thTags = '';
        for (let h of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>\n`;
        }

              
        let trTags = '';
        for (let row of this.data) {
            trTags += `
            <tr>
                <td>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type='button' onclick='bookDisplay(this);' class='btn btn-default'>
                        Edit Book <span class='glyphicon glyphicon-edit'>
                        </span>
                    </button>
                </td>           
            `;
            let tdTags = '';
            for (let property of this.headers) {
                let field = row[property.toLowerCase()];
                trTags += `
                    <td class="mdl-data-table__cell--non-numeric">
                                ${field}
                    </td>
                    
                `;
            }
                         
            trTags += ` <td>
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type='button' onclick='bookDelete(this);' class='btn btn-default'>
                    Delete Book<span class='glyphicon glyphicon-remove'>
                    </span>
                    </button>
                </td>
                </tr>`;
        }

       
        return `
        <div id="library-books-container">
            <h2 style="font-size: 28px;">Book Library</h2>
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">       
            <div id="box">
			    <!--Adding new books --> 
                <div id="new-books-added"></div>
		    </div>
                <tbody class="myTable">
                    ${trTags}
                </tbody>
            </table>
            <div id="add-new-books" class="container">
                <div class="row">
                    <!--<div class="col-sm-6">
                        <h2>ADD NEW BOOK TO LIBRARY</h2>
                    </div>-->
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h2 style="font-size: 28px;">Book Library Information</h2>
                            </div>
                                <div class="panel-body">
                                <div class="form-group">
                                    <label for="title">Title</label> <input class="form-control" id="title" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label for="category">Category</label> <input class="form-control" id="category" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label for="author">Author</label> <input class="form-control" id="author" type="text" value="">
                                </div>
                                <div class="form-group">
                                    <label for="type">Type</label> <input class="form-control" id="type" type="text" value="">
                                </div>                   
                            </div>
                            <div class="panel-footer">
                                <div class="row">
                                    <div class="col-xs-12">
                                        <button type="button" class="btn btn-primary mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="updateButton" onclick="bookUpdate();">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            `;
    }
    
}
