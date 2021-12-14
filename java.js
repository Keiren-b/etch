function createDivs(col, rows) {
    for(let i = 0; i <(col * rows); i++){
       const div = document.createElement('div')
       div.style.border = '1px solid black'
       container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
       container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       container.appendChild(div)
       
    }
}

createDivs(16,16);

//sets the variable square to cover each little square in the grid
let square = container.querySelectorAll('div');

document.querySelectorAll('container').addEventListener("mouseover", function(){
    document.querySelector('div').style.background = 'black'
})



function changeBackground(e) {
    e.target.style.background = 'black';
}

