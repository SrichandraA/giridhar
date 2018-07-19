
$(document).ready(function(){

    if (screen && screen.width > 1024) {
        if ($(window).scrollTop() === 0) {
            $("nav").css("opacity", "0.3");
            // $("nav").css("background","linear-gradient(to right,  rgba(108, 72, 169, 0.3) 0%,rgba(255, 40, 122, 0.3) 100%)");
        }
        else {
            $("nav").css("opacity", "1");
            $(".nav-name").css("margin-left", "0");

        }
    }
    else {
        $("nav").css("opacity", "1");
        $(".nav-name").css("margin-left", "0");
        $(".nav-name").css("margin-right", "0");

    }

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (screen && screen.width > 1024) {

          if (scroll < 560) {
              $(".nav-name").css("margin-left", 560 - scroll);
              $("nav").css("opacity", 0.3 + 0.001 * scroll);


          }
          else if (scroll > 560) {
              $("nav").css("opacity", 1);

          }
      }

    $('#nav-resume').toggleClass('active-keep',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#resume').offset().top-200,

    );
    if($(this).scrollTop()>=$('#resume').position().top-200){
        $("#nav-work").removeClass("active-keep");
    }
    if($(this).scrollTop()>=$('#start').position().top-200 && $(this).scrollTop()<=$('#resume').position().top-200){
        $("#nav-work").addClass("active-keep");
    }



  });
    $(".navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          window.location.hash = hash;
      });
    }
    });
    $("#arrowclick").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){

              window.location.hash = hash;
          });
        }
        });

    $("a.footer span.gototop").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });

})
