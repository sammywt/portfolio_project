console.log("Hello");

$(() => {
    console.log('javaScript loaded ');

    // let aboutButton = $('#about-button');

    // aboutButton.on('click', scrollToAbout);

    // function scrollToAbout() {
    //     $('body').animate(
    //         // {scrollTop: $('#about-area').offset.top()}, 3000
    //         scrollTo($('#about-area'), 3000)
    //         // scrollTop($('#about-area'), 3000)
    //     );
                
    // }


    
        $('#about-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#about-area").offset().top
        }, 2000) 
        })

        $('#skills-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#skills-area").offset().top
        }, 2000) 
        })

        $('#projects-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#project-area").offset().top
        }, 2000) 
        })

        $('#contact-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#contact-area").offset().top
        }, 2000) 
        })

});