const sendButton = document.querySelector('form button');
const formImg = document.getElementById('formImg');


function checkContactMethod(ev){
    ev.preventDefault()
    // remove a alteração da tela padrão do form
    alert('Seus dados foram enviados com sucesso');
    document.location = 'index.html'
}

function enableButton(el){
    if(el.checked){
        sendButton.classList.remove('disable-button');
        sendButton.disabled = false;
        return;
    }
    sendButton.classList.add('disable-button')
    sendButton.disabled = true;
}