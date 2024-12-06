$(document).ready(function() {
    console.log("Page loaded");

    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Simple form validation
    $('form').on('submit', function(event) {
        let isValid = true;

        $(this).find('input, textarea').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border', '1px solid red');
            } else {
                $(this).css('border', '1px solid #ccc');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });

    // Responsive navigation menu
    $('.menu-toggle').on('click', function() {
        $('nav ul').toggleClass('open');
    });
});
