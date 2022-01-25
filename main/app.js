console.log("Hello");

$(() => {
    console.log('javaScript loaded ');

    let aboutButton = $('aboutButton');

    aboutButton.on('click', scrollToAbout);

    function scrollToAbout() {
        $('.about-me').scrollTop(80);
    }

    

});