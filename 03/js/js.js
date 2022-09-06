$(document).ready(function() {
  $(".menu_ref").click(function() {
    com.veeva.clm.gotoSlide(
      "BR_2019_V1_SUPC_PT_OxyContinDA_OXC_Introduction_Navigation_IntroNav.zip",
      ""
    );
  });
  $(".menu_bula").click(function() {
    com.veeva.clm.gotoSlide(
      "BR_2019_V1_SUPC_PT_OxyContinDA_OXC_Introduction_Navigation_IntroNav.zip",
      ""
    );
  });
  $(".goToMenuGeralGrunenthalSF").click(function() {
    com.veeva.clm.gotoSlide("menu_geral_tela.zip", "menu_geral");
  });
});
