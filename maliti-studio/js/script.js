$(document).ready(function() {
  $("#image1").click(function() {
      $("#design").fadeToggle(1000);
  });
  $("#image2").click(function() {
      $("#develop").slideToggle(1000);
  });
  $("#image3").click(function() {
      $("#Products").toggle(1000);
  });
  $('#form form').submit(function(){
    var name = $('#name').val();
     alert("Your message "+name+ " has been sent");
  });
});

