document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const lists = document.getElementById('lists')

    btn.addEventListener('click', myFunction);

    function myFunction() {
        btn.classList.toggle('open');
        menu.classList.toggle('animate');
        lists.classList.toggle('flex');
    }
});
