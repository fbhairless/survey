$(document).ready(function() {
  $("#blanks form").submit(function() {
    var nameInput = $("input#name").val();
    var fav-foodInput = $("input#fav-food").val();
    var fav-musicInput = $("input#fav-music").val();
    var misc-infoInput = $("input#misc-info").val();

    $(".name").text(nameInput);
    $(".fav-food").text(fav-foodInput);
    $(".fav-music").text(fav-musicInput);
    $(".misc-info").text(misc-infoInput);

    $("#survey-hidden").show();

    event.preventDefault();

    $(".survey-hidden").hide();
  });
});
