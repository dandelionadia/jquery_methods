$(document).ready(function() {
//1
  /*
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
// 5
  $(".text").fadeIn(4000);

  // 6

  $("a").each(function() {
    var links = $(this).attr("href");
    $("#list").append("<li>" + links + "<li>");
  });
  */
  //7
  var animaTime = 2000;
  var modal = $("#modalDiv");

  var oldDiv = null;
  $(".someDiv").on("click", function(e) {
    if(oldDiv){
      oldDiv.css("opacity", 1);
    }

    //обгортка елемента на котрий клікнули мишкою
    var jthis = $(this);
    //помістити на місце елемента блок модалдів
    modal.css({"top":jthis.offset().top,
               "left":jthis.offset().left,
               "width":jthis.width(),
               "height":jthis.height(),
               "background-color":jthis.css("background-color"),
               "opacity": 1,
               "display": "block"
              });
    //скриваємо цей елемент
    jthis.css("opacity", 0);

    modal.animate({"height":400,"width":400}, {
          duration: 1000,
          queue: false,
          specialEasing: {
            height: "swing",
            width: "swing"
          }
        })
        .animate({"top":(window.innerHeight - 400) / 2,
                  "left":(window.innerWidth -  400) / 2,},{
                    duration: 1000,
                    specialEasing: {
                      height: "swing",
                      width: "swing"
                    }
                  })

    oldDiv = jthis;
  })
  
 $("#modalDiv").on("click", function() {
    $(this).hide(animaTime);
  })

});
