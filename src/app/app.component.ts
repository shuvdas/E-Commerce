import { Component, OnInit, DoCheck, HostListener, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  shown: boolean = false;
  hidden: boolean = false;

constructor(public router: Router) {}

  // reloadComponent(event) {
  //   let currentUrl = this.router.url;
  //       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //       this.router.onSameUrlNavigation = 'reload';
  //       this.router.navigate([currentUrl]);
  //   }

  // @Output() onExpansion = new EventEmitter();

  ngOnInit() {
    // this.onExpand();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
      if(window.innerHeight > 800 || window.innerWidth > 768) {
        $('.navbar-collapse').css('background','none');
      }
      else {
        $('.navbar-collapse').css('background','-webkit-linear-gradient(top, white, rgb(152, 152, 212))');
      }
  }

  onExpand(e): void {
  var navbar_visible = $("#myNavbar").is(":visible");
  if(navbar_visible === false) {  
    // $('.navbar-collapse').fadeIn(200);
    setTimeout(function(){$('.navbar-collapse').css('background','-webkit-linear-gradient(top, white, rgb(152, 152, 212))');},200);
    // $('.navbar-collapse').addClass('show');
  }
  else if(navbar_visible === true) {
    setTimeout(function(){$('.navbar-collapse').css('background','none');},200);
    // $('.navbar-collapse').collapse();
    // $('.navbar-collapse').addClass('show');
  }
}

anchorMethod(event): void {
  if(event.target.innerHTML === 'Home') {
    $('#homeId').css('background','none');
    $('#homeId').css('color','blueviolet');
    $('#homeId').css('font-weight','bold');
    $('#shopId').css('color','black');
    $('#signupId').css('color','black');
    $('#loginId').css('color','black');


    $('#homeId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    },
    function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    });
    $('#shopId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#signupId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#loginId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
   

    $('#shopId').css('font-weight','normal');
    $('#signupId').css('font-weight','normal');
    $('#loginId').css('font-weight','normal');
  }
  else if(event.target.innerHTML === 'Shops') {
    $('#shopId').css('background','none');
    $('#homeId').css('color','black');
    $('#shopId').css('color','blueviolet');
    $('#shopId').css('font-weight','bold');
    $('#signupId').css('color','black');
    $('#loginId').css('color','black');
    
    $('#homeId').css('font-weight','normal');
    $('#signupId').css('font-weight','normal');
    $('#loginId').css('font-weight','normal');
    
    $('#shopId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    },
    function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    });
    $('#homeId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#signupId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#loginId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });

  }

  else if(event.target.innerHTML.includes('Sign Up')) {
    $('#signupId').css('background','none');
    $('#homeId').css('color','black');
    $('#shopId').css('color','black');
    $('#signupId').css('color','blueviolet');
    $('#signupId').css('font-weight','bold');
    $('#loginId').css('color','black');

    $('#signupId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    },
    function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    });
    $('#homeId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#homeId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#loginId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });

    $('#homeId').css('font-weight','normal');
    $('#shopId').css('font-weight','normal');
    $('#loginId').css('font-weight','normal');
  }
  else if(event.target.innerHTML.includes('Login')) {
    $('#loginId').css('background','none');
    $('#homeId').css('color','black');
    $('#shopId').css('color','black');
    $('#signupId').css('color','black');
    $('#loginId').css('color','blueviolet');
    $('#loginId').css('font-weight','bold');

    $('#loginId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    },
    function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','bold');
    });    
    $('#signupId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#homeId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });
    $('#shopId').hover(function(){
      $(this).css('color','blueviolet');
      $(this).css('font-weight','normal');
    },
    function(){
      $(this).css('color','black');
      $(this).css('font-weight','normal');
    });

    $('#homeId').css('font-weight','normal');
    $('#shopId').css('font-weight','normal');
    $('#signupId').css('font-weight','normal');
  }
 
  // $('.navbar-collapse').fadeOut(200);
  // $('.navbar-collapse').css('transition-duration','2s');
  // $('.navbar-collapse').fadeOut(2000);
  // $('.navbar-collapse').slideUp('slow');
  setTimeout(function(){$('.navbar-collapse').removeClass('show');},0);
 
}

}
