const tabs=document.querySelectorAll('.tab');
const panels=document.querySelectorAll('.panel');
const menuBtnEl=document.getElementById('menu-btn');
const menuEl=document.getElementById('menu');


//tab menu event listener
tabs.forEach((tab)=>tab.addEventListener('click', tabClickHandler))

function tabClickHandler(e){
    //deactivate all tabs
    tabs.forEach((tab)=>{
        tab.children[0].classList.remove('border-soft-red', 'border-b-4', 'md:border-b-0');
    })
    // hide all panels
    panels.forEach((panel)=>panel.classList.add('hidden'))

    //active a new tab panel base on target
    e.target.classList.add('border-soft-red', 'border-b-4')
    const classString=e.target.getAttribute('data-target');
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}

menuBtnEl.addEventListener('click', navtoggle);

function navtoggle(){
    menuBtnEl.classList.toggle('open');
    menuEl.classList.toggle('flex');
    menuEl.classList.toggle('hidden')
}