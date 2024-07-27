var res1 = document.querySelector('td#um')
var res2 = document.querySelector('td#dois')
var res3 = document.querySelector('td#tres')
var res4 = document.querySelector('td#quatro')
var res5 = document.querySelector('td#cinco')
var res6 = document.querySelector('td#seis')
var res7 = document.querySelector('td#sete')
var res8 = document.querySelector('td#oito')
var res9 = document.querySelector('td#nove')
var result = document.querySelector('div#result')

function MudColor(color) {
    color.forEach(function (color2) {
        color2.onmouseover = function () {
            color2.style.backgroundColor = 'lightgrey'
        }

        color2.onmouseout = function () {
            color2.style.backgroundColor = 'white'
        }
    })
}


function PutString(string) {
    string.forEach(function (quadra) {
        quadra.onclick = function () {
            quadra.innerHTML = 'X'
            quadra.style.color = 'red'
            /*resultados na horizontal*/
            if (res1.innerHTML == 'X' && res2.innerHTML == 'X' && res3.innerHTML == 'X' || res4.innerHTML == 'X' && res5.innerHTML == 'X' && res6.innerHTML == 'X' || res7.innerHTML == 'X' && res8.innerHTML == 'X' && res9.innerHTML == 'X') {
                result.innerHTML = ' X VENCEU'
                result.style.color = '#e00000'
                setTimeout(function () { window.location.reload() }, 500)
            }
            /*resultados na vertical*/
            if (res1.innerHTML == 'X' && res4.innerHTML == 'X' && res7.innerHTML == 'X' || res2.innerHTML == 'X' && res5.innerHTML == 'X' && res8.innerHTML == 'X' || res3.innerHTML == 'X' && res6.innerHTML == 'X' && res9.innerHTML == 'X') {
                result.innerHTML = ' X VENCEU'
                result.style.color = '#e00000'
                setTimeout(function () { window.location.reload() }, 500)

            }
            /*resultados na diagonal*/
            if (res1.innerHTML == 'X' && res5.innerHTML == 'X' && res9.innerHTML == 'X' || res3.innerHTML == 'X' && res5.innerHTML == 'X' && res7.innerHTML == 'X') {
                result.innerHTML = ' X VENCEU'
                result.style.color = '#e00000'
                setTimeout(function () { window.location.reload() }, 500)
            }

        }

        quadra.oncontextmenu = function (event) {
            event.preventDefault()
            quadra.innerHTML = 'O'
            quadra.style.color = 'blue'
            /*resultados na horizontal*/
            if (res1.innerHTML == 'O' && res2.innerHTML == 'O' && res3.innerHTML == 'O' || res4.innerHTML == 'O' && res5.innerHTML == 'O' && res6.innerHTML == 'O' || res7.innerHTML == 'O' && res8.innerHTML == 'O' && res9.innerHTML == 'O') {
                result.innerHTML = ' O VENCEU'
                result.style.color = 'blue'
                setTimeout(function () { window.location.reload() }, 500)
            }
            /*resultados na vertical*/
            if (res1.innerHTML == 'O' && res4.innerHTML == 'O' && res7.innerHTML == 'O' || res2.innerHTML == 'O' && res5.innerHTML == 'O' && res8.innerHTML == 'O' || res3.innerHTML == 'O' && res6.innerHTML == 'O' && res9.innerHTML == 'O') {
                result.innerHTML = ' O VENCEU'
                result.style.color = 'blue'
                setTimeout(function () { window.location.reload() }, 500)
            }
            /*resultados na diagonal*/
            if (res1.innerHTML == 'O' && res5.innerHTML == 'O' && res9.innerHTML == 'O' || res3.innerHTML == 'O' && res5.innerHTML == 'O' && res7.innerHTML == 'O') {
                result.innerHTML = ' O VENCEU'
                result.style.color = 'blue'
                setTimeout(function () { window.location.reload() }, 500)
            }

        }


    })
}

let Q = document.querySelectorAll('.quadrados')
MudColor(Q)
PutString(Q)

