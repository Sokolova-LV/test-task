document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.main__link-click');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            changeLogoTitle(); 
        });
    });

    // change logo
    function changeLogoTitle() {
        var logo = document.querySelector('.main__logo');
        var title = document.querySelector('.main__title');

        // hide logo, display text
        logo.style.display = 'none';
        title.style.display = 'block';
    }
});
