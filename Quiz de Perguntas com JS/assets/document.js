window.alert('Welcome to the Quiz with alerts!')
window.confirm('Do you want to continue?')

var nome = window.prompt('What is your name?')
var idade = window.prompt('How old are you?')
var cor = window.prompt('What is your favorite color?')
var conta = window.confirm('Are you able to sum two numbers and get the total 15?')

var n1 = Number(window.prompt(`Type a number`))
var n2 = Number(window.prompt(`Type another number`))
var resultado = n1 + n2 

document.write(`Your name is <strong>${nome}.</strong><br> You're <strong>${idade} years old.</strong> <br>Your favorite color is <strong>${cor}.</strong><br> The result was ${n1} + ${n2} = <strong>${resultado}!</strong>`)
