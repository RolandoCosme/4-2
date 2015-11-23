$(document).ready(function(){
 $(".btn-default").on("click", function(e) {
    e.preventDefault();
    var newTable = document.getElementById("myTable");
    var newTd = $("<td>").addClass("newStuff")
    var newTr = $("<tr>").addClass("newStuff")
    var addItem = document.getElementById("add-btn");
    var completeItem = document.getElementById("completed-btn");
    var deleteBtn = document.getElementById("delete-btn");
    var newForm = document.getElementById("new-form");
    
    $(".addBox").append(newForm).append(completeItem).append(deleteBtn);
  });
});

