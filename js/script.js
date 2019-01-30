// When the user cliks on the menu icon button, the menu appears or disappear
$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$("nav ul").toggleClass("showing");
	});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-b").style.display = "block";
    } else {
        document.getElementById("top-b").style.display = "none";
    }
}

// When the user clicks on the button with the up arrow, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



