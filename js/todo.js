$(document).ready(function(){
  $(".btn-danger").hide();

var deleteBtn = document.getElementById("delete-btn")
var completeItem = document.getElementById("completed-item")
var checkBox = document.getElementById("check-box")

deleteBtn.addEventListener("click", deleteRow);
 

 // this will delete completed items but not the last item left

 function deleteRow () {
    console.log("delete!");
 }

 $('<input>').attr({
    type: 'hidden',
    id: 'add-item',
    name: 'bar'
}).appendTo('form');



// $('#tableid').on('click', buttonSelector, function(){
//     $(this).closest ('tr').remove ();
// });

for ( var i=0; i < deleteBtn.length; i++) { 
console.log(deleteBtn) 
}