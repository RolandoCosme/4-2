$(document).ready(function(){
  var addItem = document.getElementById("add-btn");
  var completeItem = document.getElementById("completed-btn");
  var deleteBtn = document.getElementById("delete-btn");
  var newForm = document.getElementById("new-form");
  var newField = $("<form>");

  var max_fields      = 10; //maximum input boxes allowed
  var wrapper         = $(".input_fields_wrap"); //Fields wrapper
  var add_button      = $(".add_field_button"); //Add button ID
  
  var x = 1; //initlal text box count
  $(newField).click(function(e){ //on add input button click
      e.preventDefault();
      if(x < max_fields){ //max input box allowed
          x++; //text box increment
          $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
      }
  });
  
  $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
      e.preventDefault(); $(this).parent('div').remove(); x--;
  })
});



// $(document).on("click", "addItem", function() {
//   var elementType = $(this).get(0).tagName;
//   var newElement = $("<form>"); 
//   newElement.append(elementType);
//   newElement.attr("placeholder", elementType);
//   newElement.attr("add-btn");
//   newElement.addClass("new-form");


//   $("#newBox").append(newElement);
// })

$(document).on("click", "add-btn", function() {
    var deleteConfirmation = confirm("Do you want to delete this?");
    if(deleteConfirmation) {
      $(this).remove();
      $("#parentalLi").html("");
    }
  });


var newRow = $("<tr>");    // ADD NEW TABLE ROW
var taskTd = $("<td>").addClass("task-td text").append(newTask);       // ADD NEW TABLE DATA WITH CLASSES TO HOLD NEW TASK
var completedBtn = $("<button>").addClass("btn btn-info").append("I'm Finished!");       // ADD NEW BUTTON WITH CLASS AND TEXT
var completedTd = $("<td>").addClass("completeTd").append(completedBtn);      // ADD BUTTON TO NEW TABLE DATA
var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete It!"); // ADD NEW BUTTON WITH CLASS AND TEXT
var deleteTd = $("<td>").addClass("deleteTd").append(deleteBtn);     // ADD BUTTON INTO NEW TABLE DATA


$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});