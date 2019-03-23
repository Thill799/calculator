var display = document.getElementById('display')

function appendNumber(number) {
  var stringValue = String(number)
  display.innerHTML += stringValue
}

function solve() {
  var items = display.innerHTML.split('+')
  display.innerHTML = Number(items[0]) + Number(items[1])
}

function clearDisplay() {
  display.innerHTML = ' '
}
