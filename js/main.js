// canvas scrips
$(document).ready(function() {
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#88C8FF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 10,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 150,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#88C8FF",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});
  // arrow click
  $(document).ready(function() {
    $(".arrow-link").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top-0;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
    });
    });


// skils script
function startSkillScript(){

 function skillScript() {

  var Progress = function( element ) {
    this.context = element.getContext( "2d" );
    this.refElement = element.parentNode;
    this.loaded = 0;
    this.start = 4.72;
    this.width = this.context.canvas.width;
    this.height = this.context.canvas.height;
    this.total = parseInt( this.refElement.dataset.percent, 10 );
    this.timer = null;
    
    this.diff = 0;
    
    this.init();	
  };
  
  Progress.prototype = {
    init: function() {
      var self = this;
      self.timer = setInterval(function() {
        self.run();	
      }, 2);
    },
    run: function() {
      var self = this;
      
      self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
      self.context.clearRect( 0, 0, self.width, self.height );
      self.context.lineWidth = 5;
      self.context.fillStyle = "#000";
      self.context.strokeStyle = "#ebbfbf";
      self.context.textAlign = "center";
      self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
      self.context.beginPath();
      self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
      self.context.stroke();
      
      if( self.loaded >= self.total ) {
        clearInterval( self.timer );
      }
      
      self.loaded++;
    }
  };
  
  var CircularSkillBar = function( elements ) {
    this.bars = document.querySelectorAll( elements );
    if( this.bars.length > 0 ) {
      this.init();
    }	
  };
  
  CircularSkillBar.prototype = {
    init: function() {
      this.tick = 5;
      this.progress();
      
    },
    progress: function() {
      var self = this;
      var index = 0;
      var firstCanvas = self.bars[0].querySelector( "canvas" );
      var firstProg = new Progress( firstCanvas );
      
      
      
      var timer = setInterval(function() {
        index++;
        if( index == self.bars.length ) {
            clearInterval( timer );
        } else{
          var canvas = self.bars[index].querySelector( "canvas" );
        
        var prog = new Progress( canvas );
       }
        
      }, self.tick * 70);
        
    }
  };
    var circularBars = new CircularSkillBar( "#bars .bar" );

}



//animation skill script on scroll

$(window).scroll(function() {
  var window_top = $(window).scrollTop();
  /* вычисляем положение элементов на странице от начала страницы  по вертикали*/
  var menu_top = $('.skils').offset().top-700 ; // -50 заменить на дистанцию которую должен проехать блок после появления на экране
  // console.log(window_top);
  // console.log(menu_top);
  if(window_top > menu_top){
  if($('.skils').hasClass("skilsActive")){
  }else{
    // scroll_active();
    skillScript();
    $('.skils').addClass("skilsActive");
  }}

});
 
}


startSkillScript();



 




   