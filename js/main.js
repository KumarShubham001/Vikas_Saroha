$(window).load(function() 
{
    $(".se-pre-con").fadeOut("slow");
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

/* fullpage.js */

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true
	});

	$.fn.fullpage.setAllowScrolling(true);
});

new fullpage('#fullpage', {
	//options here
	autoScrolling: true,
	scrollHorizontally: true
});

fullpage_api.setAllowScrolling(false);

/* fullpage.js ends here */

/* Script for to top button */

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}