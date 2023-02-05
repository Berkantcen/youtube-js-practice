const btn = document.getElementById('clickMe')

const colors = ['red', 'blue', 'yellow', 'gray', 'orange']

btn.addEventListener('click', () => {
  changeRandomColor()
})

const changeRandomColor = () => {
  const max = colors.length - 1
  const min = 0
  const randomPosition = Math.floor(Math.random() * (max - min + 1) + min)
  document.body.style.backgroundColor = colors[randomPosition]
}
