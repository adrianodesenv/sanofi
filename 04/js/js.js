let showPopup = false;

$(document).ready(function () {
  $("#openPopup").click(function () {
    if (showPopup) {
      $("img").addClass("hide");
      showPopup = false;
      return;
    }
    $("img").removeClass("hide");
    showPopup = true;
  });
});
