const menuBtnEl=document.getElementById('menu-btn');
const menu=document.getElementById('menu');

menuBtnEl.addEventListener('click', navtoggle);

function navtoggle(){
    menuBtnEl.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}