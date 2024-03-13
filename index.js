document.addEventListener('DOMContentLoaded', function() {
    // Находим ссылку с классом main__link-click
    var links = document.querySelectorAll('.main__link-click');

    // Добавляем обработчик события клика для ссылки
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем переход по ссылке
            changeLogoTitle(); // Вызываем функцию для смены логотипа на текст
        });
    });

    // Функция для смены логотипа на текст
    function changeLogoTitle() {
        var logo = document.querySelector('.main__logo');
        var title = document.querySelector('.main__title');

        // Скрываем логотип и показываем текст
        logo.style.display = 'none';
        title.style.display = 'block';
    }
});
