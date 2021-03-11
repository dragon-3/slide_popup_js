function myFunction() {
  var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.img-blur').css({
        filter: "blur(" + (scroll) + "px)"
    })
})

var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2500);    
    }


//show INTRO on scroll
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.history-container'
})
.setClassToggle('.history-container', 'show')
.addTo(controller);

//show CHAT on scroll 1
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-1'
})
.setClassToggle('.chat-1', 'chat-1-show')
.addTo(controller);
 
//show CHAT on scroll 2
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-2'
})
.setClassToggle('.chat-2', 'chat-2-show')
.addTo(controller);

//show CHAT on scroll 3
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-3'
})
.setClassToggle('.chat-3', 'chat-3-show')
.addTo(controller);

//show CHAT on scroll 2
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-4'
})
.setClassToggle('.chat-4', 'chat-4-show')
.addTo(controller);

//show CHAT on scroll 2
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-5'
})
.setClassToggle('.chat-5', 'chat-5-show')
.addTo(controller);

//show CHAT on scroll 2
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '.chat-6'
})
.setClassToggle('.chat-6', 'chat-6-show')
.addTo(controller);