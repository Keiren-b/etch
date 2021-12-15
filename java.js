function createDivs(col, rows) {
    for(let i = 0; i <(col * rows); i++){
       const div = document.createElement('div')
       div.style.border = '1px solid black'
       container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
       container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
       container.appendChild(div).classList.add('box')
       
    }
}

createDivs(16,16);


function blackColor() { 
    
    const boxes = container.querySelectorAll('.box')


        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'black'
            
        }))
    }
   blackColor()

   const clearBtn = document.createElement('button');
   clearBtn.textContent = "CLEAR"
   buttonContainer.appendChild(clearBtn)

   function reSet(){
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => clearBtn.addEventListener('click', () => {
        box.style.background = "white"
    }))
}

reSet()