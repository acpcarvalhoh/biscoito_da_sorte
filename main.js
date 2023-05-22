/* Variáveis */
const firstScreen = document.querySelector('.firstScreen')
const secondScreen = document.querySelector('.secondScreen')
const cookie = firstScreen.querySelector('img')
const resetCookie = secondScreen.querySelector('button')

/* Eventos */
cookie.addEventListener('click', openCookie)
resetCookie.addEventListener('click', handleResetCookie)


/* Funcões */
function openCookie(){
    toogleScreen()
}

function handleResetCookie(){
    toogleScreen()
}

function toogleScreen(){
    firstScreen.classList.toggle('hidden')
    secondScreen.classList.toggle('hidden')
}


