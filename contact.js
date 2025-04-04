const contactForm = document.getElementById('contact-form');
const termBtn     = document.getElementById('accept-term');

function checkContactMethod(ev){

    // remove a alteração da tela padrão do form
    ev.preventDefault()
    console.log(termBtn.value)

    const contactOption = document.getElementById('select-contact');
    if (!contactOption.value){
        alert('Selecione um método de contato.');
    } else{
        alert('Form enviado com sucesso!')
    }
}

function sendBtnSwitcher(el){
    console.log(Object(el));
}