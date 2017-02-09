
window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);