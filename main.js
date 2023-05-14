$(document).ready(function () {
  //all of my jQuery codes

  $(".searchbtn").click(function () {
    window.location.href = "https://www.google.com/";
    return false;
  });

  $("#btn-one").click(function () {
    $("#fade-one").fadeOut(2000, function () {
      $("#btn-one").attr("value", "Paragraph disappeared");
    });
  });
  $("#btn-fade-in").click(function () {
    $("#fade-one").fadeIn(3000);
    $("#btn-one").attr("value", "Now you can see again");
  });

  $("#btn-two").click(function () {
    $("ul").append("<li>Append List Item</li>");
  });

  $("#btn-three").click(function () {
    $(".para3").css("color", "red");
  });

  $("#btn-hide").click(function () {
    $("#girl-hides").hide(2000, function () {
      $("#btn-hide").attr("value", "Where is she?");
    });
  });
  $("#btn-show").click(function () {
    $("#girl-shows").show(1000);
    $("#btn-show").attr("value", "Here she is");
  });

  $("#btn-down").click(function () {
    $("#square-one").slideUp(3000);
  });
  $("#btn-up").click(function () {
    $("#square-one").slideDown(3000);
  });

  $("#btn-hello").click(function () {
    $("#domtex").html("<h3>Bye World</h3>");
  });

  $("#btn-bye").click(function () {
    $("#domtext-two").text("Almost monday");
    alert($("#domtext-two").text());
  });

  /*   
   

     $('h3.createdclass').addClass('myClass');
     $('h3.createdclass').removeClass('myClass'); */
});
