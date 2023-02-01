let numero = parseInt(Math.random() * 1001)
let chute = document.querySelector('#chute')
let result = document.querySelector('#result')
let button = document.querySelector('#button')
/*while(chute != numero){
    if(chute == numero){
        result.innerHTML = 'Acertou'
    }else if(chute > numero){
        result.innerHTML ='Errou... o número secreto é menor'
    }else if(chute < numero){
        result.innerHTML ='Errou... o número secreto é maior'
    }
}*/
button.addEventListener('click', ()=>{

    result.style.padding = '20px'
    if(chute.value == numero){
        result.innerHTML = 'Acertou!'
        result.style.color = 'green'
    }else if(chute.value > numero){
        result.innerHTML ='Errou... o número secreto é menor'
        result.style.color = 'red'
    }else if(chute.value < numero){
        result.innerHTML ='Errou... o número secreto é maior'
        result.style.color = 'yellow'
    }else if(chute.value == null){
        result.innerHTML = 'digite algum numero'
    }
})
