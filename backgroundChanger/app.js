// Bring all html element we need
//Add event listener to click me button
// Pick a color from colors array and make the body's background color to that selected color
const btn = document.getElementById('clickMe')

const colors = ['red', 'blue', 'yellow', 'gray', 'orange']
let currentPosition

btn.addEventListener('click', changeColor)

function changeColor() {
  if (currentPosition === undefined) {
    currentPosition = 0
  } else if (currentPosition < colors.length - 1) {
    currentPosition = currentPosition + 1
  } else {
    currentPosition = 0
  }
  document.body.style.backgroundColor = colors[currentPosition]
}
