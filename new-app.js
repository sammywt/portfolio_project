console.log('Hello');

$(() => {

    console.log('javaScript has loaded');

    $('#hamburger').on('click', revealNav);

    function revealNav() {
        $('nav').toggleClass('nav-vis');
    }

    $('#click-about').on('click', revealAbout);

    function revealAbout() {
        $('.about-me > p').toggle();
    }

    $('#click-skills').on('click', revealSkills);

    function revealSkills() {
        $('.skills > div').toggle();
    }

    $('#click-projects').on('click', revealProjects);

    function revealProjects() {
        $('.projects > div').toggle();
    }
    
    $('#click-proj1').on('click', revealProjOne);

    function revealProjOne() {
        $('.proj1-content').toggle();
    }

    $('#click-proj2').on('click', revealProjTwo);

    function revealProjTwo() {
        $('.proj2-content').toggle();
    }

    $('#click-contact').on('click', revealContactField)

    function revealContactField() {
        $('.contact-content').toggle();
    }


    $('.about-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#about-area").offset().top
        }, 2000) 
    })

    $('.skills-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#skills-area").offset().top
        }, 2000) 
    })

    $('.projects-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#project-area").offset().top
        }, 2000) 
    })

    $('.contact-button').click(function() {
        $('html, body').animate({
          scrollTop: $("#contact-area").offset().top
        }, 2000) 
    })


});

//SCROLL FUNCTION CITATION FOUND IN README 