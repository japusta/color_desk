const board = document.querySelector('#board')
const color = ['00FF00','#20B2AA','#FFFF00','#1E90FF', '#DC143C', '#00FA9A', '#FF7F50', '#7B68EE']
const SQUARES_NUMBER = 500

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        SetColor(square)
    })

    square.addEventListener('mouseleave', () => {
        RemoveColor(square)
    })

    board.append(square)
}

function SetColor(e){
    const new_color = GetRandomColor()
    e.style.backgroundColor = new_color
    e.style.boxShadow = `0 0 2px ${new_color}, 0 0 10px ${new_color}`
}

function RemoveColor(e){
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #000`
}

function GetRandomColor(){
    const index = Math.floor(Math.random()* color.length)
    return color[index]
}