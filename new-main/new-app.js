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


});