let turn = 0
let result = ''

const area = document.querySelector('.area')
const modalContent = document.querySelector('.content')
const modalWindow = document. querySelector('.modal-container')
const overlay = document. querySelector('.overlay')
const modalBtn = document. querySelector('.btn')

area.addEventListener('click', event => {

    if(event.target.className === 'cell' && event.target.innerHTML === '') {
        turn % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0'
        turn++
        winCaseTest()
    }
})

const winCaseTest = () => {
    const cells = document.querySelectorAll('.cell')
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(i = 0; i < winCases.length; i++) {
        if (
            cells[winCases[i][0]].innerHTML == 'X' 
            &&  cells[winCases[i][1]].innerHTML == 'X' 
            &&  cells[winCases[i][2]].innerHTML == 'X'
        ) 
        {
            result = 'Победили Крестики!'
            resultAnnouncement(result)
        } else if (
            cells[winCases[i][0]].innerHTML == '0' 
            &&  cells[winCases[i][1]].innerHTML == '0' 
            &&  cells[winCases[i][2]].innerHTML == '0'
        ) {
            result = 'Победили Нолики!'
            resultAnnouncement(result);
        } else if (turn >= 9 && result != 'Крестики' && result != 'Нолики') {
            result = 'Победила Дружба!'
            resultAnnouncement(result)
        }
    }
}

const resultAnnouncement = winner => {
    modalContent.innerHTML = `${winner}`
    modalWindow.style.display = 'block'
}

const closeModal = () => {
    modalWindow.style.display = 'none'
    location.reload()
}

const addModalEventListeners = () => {
    overlay.addEventListener('click', closeModal)
    modalBtn.addEventListener('click', closeModal)
}

addModalEventListeners()