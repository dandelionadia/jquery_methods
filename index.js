$(document).ready(function() {
//1
  $("#click").click(function() {
    $("#book").hide("slow", function() {
      alert("click");
    })
  })
// 2
  $("button").click(function() {
    $("p").hide("slow");
  })
// 3
  $("#hide").click(function() {
    $("span:last-child").hide("fast", function() {
      $(this).prev().hide("fast", arguments.callee);  
    })
  })
  $("#show").click(function() {
    $("span").show(2000);
  })
// 4
for ( var i = 0; i < 5; i++ ) {
  $( "<div>" ).appendTo( document.body );
}
$( "div" ).click(function() {
  $( this ).hide( 2000, function() {
    $( this ).remove();
  });
});


});