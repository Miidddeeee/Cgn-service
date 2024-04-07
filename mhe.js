document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const lists = document.getElementById('lists');
    const buts = document.querySelectorAll('.clickable');

    btn.addEventListener('click', myFunction);

    function myFunction() {
        btn.classList.toggle('open');
        menu.classList.toggle('animate');
        lists.classList.toggle('flex');
    }

    buts.forEach(element => {
        element.addEventListener('click', () =>{
            menu.classList.remove('animate');
            btn.classList.remove('open')
        })
    });
});


    