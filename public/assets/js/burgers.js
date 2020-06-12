// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        devoured: 1
      }
    })
    .then(() => location.reload());
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        burger_name: $("#bn").val().trim(),
        devoured:false
      }
    })
    .then(() => location.reload());
  });
});
