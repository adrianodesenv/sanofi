let page = 1;
$(document).ready(function () {
  $("#goToPage2").click(function () {
    $("img").addClass("hide");

    if (page === 1) {
      page = 2;
      $("#img2").removeClass("hide");
      return;
    }

    if (page === 3) {
      page = 4;
      $("#img4").removeClass("hide");
      return;
    }

    if (page === 4) {
      page = 3;
      $("#img3").removeClass("hide");
      return;
    }

    page = 1;
  });

  $("#goToPage3").click(function () {
    page = 3;
    $("img").addClass("hide");

    $("#img3").removeClass("hide");
  });

  $("#goToPage4").click(function () {
    $("img").addClass("hide");
    page = 1;
  });
});
