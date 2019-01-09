document.addEventListener('DOMContentLoaded', () => {
    let menu = document.getElementById('menu');
    let menuIco = document.getElementById('menuIco');

       menuIco.addEventListener('click', () => {
        menu.classList.toggle('menuAfter');
    });
});