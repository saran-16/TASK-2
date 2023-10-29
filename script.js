document.getElementById("home").addEventListener("click", function () {
    window.location.href = "index.html"; 
});

document.getElementById("about").addEventListener("click", function () {
    window.location.href = "about.html"; 
});

document.getElementById("contact").addEventListener("click", function () {
    window.location.href = "contact.html"; 
});
$(document).ready(function () {
    $('#imageCarousel').carousel({
        interval: 3000, // Set the interval for auto-sliding (in milliseconds)
    });

    $('#imageCarousel').on('slid.bs.carousel', function () {
        // Update carousel indicators
        var currentIndex = $('div.active').index() + 1;
        $('.carousel-indicators li').removeClass('active');
        $('.carousel-indicators li:nth-child(' + currentIndex + ')').addClass('active');
    });
});
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function () {
    $('#imageCarousel').carousel();
});


