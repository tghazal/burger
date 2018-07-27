$(function() {


$(".change-devoured").on("click",function(event){
  var id =$(this).data("id");
 
     // Send the PUT request.
     $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured:true}
      }).then(
        function() {
          console.log("changed devoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

})
