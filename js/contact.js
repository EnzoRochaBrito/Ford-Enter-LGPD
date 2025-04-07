const sendButton = document.querySelector('form button');
const formImg = document.getElementById('formImg');

let X = 0;
let Y = 0;

async function getIndex(event){
    X += event.movementX
    Y += event.movementY
    // console.log(X)
    console.log(X)
    console.log(Y)
    formImg.style.transform = `translate(${X+100}px, ${Y+100}x)`
}

function mouseOut(event){
    formImg.style.transform = 'translate(100px, 100px)'
}

formImg.addEventListener('mouseleave', mouseOut, false)
formImg.addEventListener('mousemove', getIndex, false)

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