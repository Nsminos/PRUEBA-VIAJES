$(document).scroll( function(e){
    const y = $("html").scrolltop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeclass("nav-black")
        
    })
