// ADD NEW BOOKS, EDIT BOOKS, DELETE BOOKS TO LIBRARY FUNCIONALITY BELOW

// Next id for adding a new book
  let nextId = 1;
// ID of book currently editing
  let activeId = 0;

  function bookDisplay(ctl) {
    let row = $(ctl).parents("tr");
    let cols = row.children("td");

  activeId = $($(cols[0]).children("button")[0]).data("id");
    $("#title").val($(cols[1]).text());
    $("#category").val($(cols[2]).text());
    $("#author").val($(cols[3]).text());
    $("#type").val($(cols[4]).text());
  /*$("#published").val($(cols[5]).text()); */

    // Change Update Button Text
    $("#updateButton").text("Update");
  }


  function bookUpdate() {
    if ($("#updateButton").text() == "Update") {
        bookUpdateInTable(activeId);
    } 
  else {
        bookAddToTable();
    }
    // Clear form fields
    formClear();
    // Focus to book name field
    $("#title").focus();
  }


  // POSSIBLE ISSUE WITH THIS FUNCTION BELOW
    // Add book to <table>
  function bookAddToTable() {
      // First check if a <tbody> tag exists, add one if not
      if ($("#bookTable .myTable").length == 0) {
        $(".myTable").append("<table><\/table>");
      }
      // Append book to table
      $(".myTable").append(
        bookBuildTableRow(nextId));

        // Increment next ID to use
          nextId += 1;
    }


  // Update book in <table>
  function bookUpdateInTable(id) {
      // Find book in <table>
      let row = $(".myTable button[data-id='" + id + "']")
                .parents("tr")[0];

      // Add changed book to table
      $(row).after(bookBuildTableRow(id));
      // Remove original book
      $(row).remove();

      // Clear form fields
      formClear();

      // Change Update Button Text
      $("#updateButton").text("Add");
    }


  // Build a <table> row of book data
  function bookBuildTableRow() {
    let ret = "<tr>" + 
                "<td>" + 
                    "<button type='button' " + 
                        "onclick='bookDisplay(this);' " + 
                        "class='btn btn-default mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>" + 
                        "<span class='glyphicon glyphicon-edit' />" + 
                        "edit book" + 
                    "<\/button>" + 
                "<\/td>" + 
                    "<td>" + $("#title").val() + "<\/td>" + 
                    "<td>" + $("#category").val() + "<\/td>" + 
                    "<td>" + $("#author").val() + "<\/td>" + 
                    "<td>" + $("#type").val() + "<\/td>" + 
                // "<td>" + $("#published").val() + "<\/td>" +
                    "<td>" + 
                        "<button type='button' " + 
                            "onclick='bookDelete(this);' " + 
                            "class='btn btn-default mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>" + 
                            "<span class='glyphicon glyphicon-remove' />" +
                            "delete book" + 
                        "<\/button>" + 
                    "<\/td>" + 
            "<\/tr>"
    return ret;
  }


  // Delete book from <table>
  function bookDelete(ctl) {
    $(ctl).parents("tr").remove();
  }


  // Clear form fields
  function formClear() {
    $("#title").val("");
    $("#category").val("");
    $("#author").val("");
    $("type").val("");
  /* 	$("published").val(""); */
  }
