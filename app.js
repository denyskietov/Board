const board = document.querySelector('#board')
const colors = [
    '#800000',
    'ff0000',
    '#800080',
    '#ff00ff',
    '#008000',
    '#00ff00',
    '#808000',
    '#ffff00',
    '#000080',
    '#0000ff',
    '#008080',
    '#00ffff',
]

const SQUARES_NUMBER = 50000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 1px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#111'
    element.style.boxShadow = `0 0 0px #111`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
