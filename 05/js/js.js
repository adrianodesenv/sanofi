$(document).ready(function () {
  $("#next").click(function () {
    $("img").removeClass("hide");
  });

  $("#previous").click(function () {
    $("img").addClass("hide");
  });
});
