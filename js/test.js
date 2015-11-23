$(document).ready(function(){
 $(".btn-default").on("click", function(e) {
    e.preventDefault();
    // var elementType = $(this).get(0).tagName;
    // var newElement = $("<" + elementType + ">");
    // newElement.append(elementType);
    // newElement.attr("placeholder", elementType);
    // newElement.addClass("newStuff");

    // var newStuff = $(this).get(0).tagName;
    // var newElement = $("<" + elementType + ">");
    var newTable = document.getElementById("myTable");
    var newTd = $("<td>").addClass("newStuff")
    var addItem = document.getElementById("add-btn");
    var completeItem = document.getElementById("completed-btn");
    var deleteBtn = document.getElementById("delete-btn");
    var newForm = document.getElementById("new-form");
    
    $(".addBox").append(newForm).append(deleteBtn).append(completeItem);

  //   var newRow = $("<tr>");    // ADD NEW TABLE ROW
  //   var taskTd = $("<td>").addClass("newStuff2").append(newTask);       // ADD NEW TABLE DATA WITH CLASSES TO HOLD NEW TASK
  //   var completedBtn = $("<button>").addClass("btn-success").append("I'm Finished!");       // ADD NEW BUTTON WITH CLASS AND TEXT
  //   var completedTd = $("<td>").addClass("completeTd").append(completedBtn);      // ADD BUTTON TO NEW TABLE DATA
  //   var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete It!"); // ADD NEW BUTTON WITH CLASS AND TEXT
  //   var deleteTd = $("<td>").addClass("deleteTd").append(deleteBtn);     // ADD BUTTON INTO NEW TABLE DATA

  //   newRow.append(taskTd).append(completedTd).append(deleteTd);
  //   $(".new-form").append(newRow);
  });
});

// $(document).ready(function(){
//  $(".add-btn").on("click", function(e) {
//     e.preventDefault();
//     var elementType = $(this).get(0).tagName;
//     var newElement = $("<" + elementType + ">");
//     newElement.append(elementType);
//     newElement.attr("placeholder", elementType);
//     newElement.attr("src", "http://lorempicsum.com/simpsons/627/200/3");
//     newElement.addClass("newlyCreatedElement");
    
//     $(".addBox").append(newElement);
//   });
// });
