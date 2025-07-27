const menuBtnEl=document.getElementById('menu-btn');
const menuEl=document.getElementById('menu');

const input=document.getElementById('link-input')
const linkForm=document.getElementById('link-form');
const errMsg=document.getElementById('err-msg');
const successMsg=document.getElementById('success-msg');



function navtoggle(){
    menuBtnEl.classList.toggle('open');
    menuEl.classList.toggle('flex');
    menuEl.classList.toggle('hidden')
}

function formHandler(e){
    e.preventDefault();
    if (input.value === '') {
        errMsg.innerHTML = 'Please enter something!';
        input.classList.add('border-red');

        setTimeout(() => {
            errMsg.innerHTML = '';
            input.classList.remove('border-red');
        }, 3000);

    } else if (!validURL(input.value)) {
        errMsg.innerHTML = 'Please enter a valid URL';
        input.classList.add('border-red');

        setTimeout(() => {
            errMsg.innerHTML = '';
            input.classList.remove('border-red');
        }, 3000);

    } else {
        errMsg.innerHTML = '';
        input.classList.remove('border-red');

        successMsg.innerHTML="Success";
        setTimeout(()=>{
            successMsg.innerHTML='';
            input.value='';
        }, 5000)
    }
}
function validURL(str) {
    let pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
        'i'
    )
    return !!pattern.test(str)
}

menuBtnEl.addEventListener('click', navtoggle);
linkForm.addEventListener('submit', formHandler);
