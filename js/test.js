$(document).ready(function(){
 $(".new-form").on("click", function(e) {
    e.preventDefault();
    var elementType = $(this).get(0).tagName;
    var newElement = $("<" + elementType + ">");
    newElement.append(elementType);
    newElement.attr("placeholder", elementType);
    newElement.attr("src", "http://lorempicsum.com/simpsons/627/200/3");
    newElement.addClass("newlyCreatedElement");
    
    $(".addBox").append(newElement);
  });
});
