$(document).ready(function(){
  //$(".btn-danger").hide();
});

var deleteBtn = document.getElementById("delete-btn")
var completeItem = document.getElementById("completed-item")
var checkBox = document.getElementById("check-box")
var newRow = $("<tr>"); 

// deleteBtn.addEventListener("click", deleteRow);

 // this will delete completed items but not the last item left

 // function deleteRow () {
 //    console.log("delete!");
 // }

 $(".btn-default").on("click", function(e) {
  e.preventDefault();

  // var newTask = $("#newTask").val().trim();
  // var isDuplicate = false;
  // $("td.task-td").each(function(){
  //   if($(this).text().trim().toLowerCase() === newTask.toLowerCase()) {
  //     isDuplicate = true;
  //     return;
  //   }
  //});

    //   if(isDuplicate){
    //   $(".alert-danger").slideDown();
    //   return;
    // }
    
    var newRow = $("<tr>");    // ADD NEW TABLE ROW
    var taskTd = $("<td>").addClass("task-td text").append(newTask);       // ADD NEW TABLE DATA WITH CLASSES TO HOLD NEW TASK
    var completedBtn = $("<button>").addClass("btn btn-info").append("Completed");       // ADD NEW BUTTON WITH CLASS AND TEXT
    var completedTd = $("<td>").addClass("completeTd").append(completedBtn);      // ADD BUTTON TO NEW TABLE DATA
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete"); // ADD NEW BUTTON WITH CLASS AND TEXT
    var deleteTd = $("<td>").addClass("deleteTd").append(deleteBtn);     // ADD BUTTON INTO NEW TABLE DATA

    newRow.append(taskTd).append(completedTd).append(deleteTd);
    $("tbody").append(newRow);

    //$("#newTask").val("").focus();
  }); 



//$("#myTable").last().append("<tr><td>New row</td></tr>");


//$('#myTable > tbody:first').append('<tr>...</tr><tr>...</tr>'); 

//$('#myTable').append('<tr><td>my data</td><td>more data</td></tr>');

// $('#tableid').on('click', buttonSelector, function(){
//     $(this).closest ('tr').remove ();
// });

// for ( var i=0; i < deleteBtn.length; i++) { 
// console.log(deleteBtn) 
// }