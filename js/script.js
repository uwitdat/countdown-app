//VARIABLES

let numState = 0
let numStateHalf = 0

//SELECTORS
let input = document.querySelector('input');
input.value = ''

let go = document.querySelector('.submit')
let prompt = document.querySelector('.prompt')
let h2 = document.querySelector('h2')
let second = document.querySelector('.second')

let inputTwo = document.querySelector('.input-two')
inputTwo.value = ''
inputTwo.style.display = 'none'

let goTwo = document.querySelector('.submit-two')
goTwo.style.display ='none'

let ul = document.querySelector('.list-down')
let clock = document.querySelector('.timer')

let checkText = document.querySelector('.finished')

let numText = document.querySelector('.num-text')

//DOM
go.addEventListener('click', function (e){
    e.target = input.value
    h2.innerText = input.value
    input.style.display = 'none';
    go.style.display = 'none'
    second.innerText = `How many days until ${h2.innerText} is over?`
    inputTwo.style.display = 'inline-block'
    goTwo.style.display ='inline-block'
})

goTwo.addEventListener('click', function (e){
    e.target = inputTwo.value
    countDown(parseInt(inputTwo.value))
    timer(parseInt(inputTwo.value))
    inputTwo.value = ''
})

//FUNCTION COUNTDOWN CREATE FROM USERNUM TO 0
function countDown(num){
for(let i = num; i >= 0; i--){
    let result = i
    let li = document.createElement('li')
    li.classList.add = ('li')
    li.innerHTML = `${result} day(s) left!`;
    let check = document.createElement('button')
    check.classList.add = 'btn'
    check.innerText = '✓'
    checkText.innerText = 'Check the box once the day is over!'
    btnCheck(check)
    li.prepend(check);
    ul.appendChild(li)
    inputTwo.style.display = 'none'
    goTwo.style.display = 'none'
    second.style.display = 'none'
    }
}

//FUNCTION TIMER
function timer(num){
    numState = num
    numStateHalf = num / 2

}


//CHECK FUNCTION (crosses off li item)
function btnCheck(btn){
    btn.addEventListener('click', function (e){
        e.target = btn
        btn.style.background = 'green';
        let btnStyle = btn.parentElement
        btnStyle.style.textDecoration = 'line-through'
        countdownText(numState)
        numState--   

    })
}

function countdownText(num){
    let end = 0
    if(num === Math.ceil(numStateHalf)){
        numText.innerText = 'Youre halfway There!'
    }if(num === end){
        numText.innerText = 'Congratulations! You did it!'
    }
}