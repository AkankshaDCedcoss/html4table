var arr = [];

$(document).ready(function () {
  $(".button5").hide();
  $("#display").hide();
  $(".button1").click(function () {
    $("#table1").css("background-color", "yellow");
  });
  $(".button2").click(function () {
    $(".row").css("background-color", "green");
  });
  $(".button3").click(function () {
    $("#display").show();
    mydata = $("#table1").html();
    arr.push(mydata);
    console.log(typeof mydata);
    //document.getElementById("#display").innerHTML = mydata;
    html = "<table>";
    html += mydata;
    html += "</table>";

    $("#display").html(html);
  });
  $(".button4").click(function () {
    $("#table1").hide();
    $(".button5").show();
  });
  $(".button5").click(function () {
    $("#table1").show();
    $(".button5").hide();
  });
});
