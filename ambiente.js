const campo = document.querySelector('#display')

function adddisplay(value) {
    display.value += value
}

function cleardisplay() {
    display.value = ''
}

function fazerConta() {
    display.value = eval(display.value)
}

function clearLast() {
    display.value = display.value.slice(0, -1)
}