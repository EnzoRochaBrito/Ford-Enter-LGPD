const sendButton = document.querySelector('form button');

function checkContactMethod(ev){
    console.log(firstname.value);

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

function enableButton(el){
    if(el.checked){
        sendButton.classList.remove('disable-button');
        sendButton.disabled = true;
        return;
    }
    sendButton.classList.add('disable-button')
    sendButton.disabled = false;
}