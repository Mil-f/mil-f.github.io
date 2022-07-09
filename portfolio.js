window.onload = function(){
    var typed = new Typed("#description", {
            strings: ["So you're looking for a programmer, <br> someone who can make your dream website into a reality-- <br> well look no further! For I can do that for you. <br>"], 
            typeSpeed: 0,
            backSpeed: 0,
            backDelay: 500,
            startDelay: 1000,
            loop: false,
            cursorChar: "",
        });
    } 

var scroll_pos = 0;
var scroll_time;
    
$(window).scroll(function() {
    clearTimeout(scroll_time);
    var current_scroll = $(window).scrollTop();
    
    if (current_scroll >= $('#main-header').outerHeight()) {
        if (current_scroll <= scroll_pos) {
            $('#main-header').removeClass('hidden');    
        }
        else {
            $('#main-header').addClass('hidden');  
        }
    }
    
    scroll_time = setTimeout(function() {
        scroll_pos = $(window).scrollTop();
    }, 100);
});
