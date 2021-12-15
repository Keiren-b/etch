const blackBtn=document.createElement('button')
blackBtn.textContent="BLACK"
buttonContainer.appendChild(blackBtn)

const grayBtn=document.createElement('button')
grayBtn.textContent="GRAY"
buttonContainer.appendChild(grayBtn)

const mysteryBtn=document.createElement('button')
mysteryBtn.textContent="???MYSTERY???"
buttonContainer.appendChild(mysteryBtn)

const button3=document.createElement('button')
button3.textContent="CLICK FOR A DOM SUPRISE"
buttonContainer.appendChild(button3)

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


function grayColor() { 
    const boxes = container.querySelectorAll('.box')
    grayBtn.addEventListener ('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'gray'
            box.style.opacity = (parseFloat(box.style.opacity) || 0) + 0.2;
       
    }))})
}
   grayColor()

function blackColor() { 
    const boxes = container.querySelectorAll('.box')
    blackBtn.addEventListener ('click', ()=>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'black'
        }))})
    }
    blackColor()

    function mysteryColor() { 
        const boxes = container.querySelectorAll('.box')
        mysteryBtn.addEventListener ('click', ()=>{
            boxes.forEach(box => box.addEventListener('mouseover', ()=> {
                boxes.forEach(box => box.remove());
                var img = document.createElement('img' );
                img.src = '/Users/keirenbrandt-sawdy/repos/etch/eel.jpeg'
                container.appendChild(img)
            }))})
        }
        mysteryColor()

    // function domdom() { 
    //     const boxes = container.querySelectorAll('.box')
    //     button3.addEventListener ('click', ()=>{
    //         boxes.forEach(box => box.addEventListener('mouseover', ()=> {
    //             boxes.forEach(box => box.remove());
    //             var img2 = document.createElement('img');
    //             img2.src = '/Users/keirenbrandt-sawdy/repos/etch/IMG_0419.jpg'
    //             container.appendChild(img2)
    //         }))})
    //     }
    //     domdom()
    

   const clearBtn = document.createElement('button');
   clearBtn.textContent = "CLEAR"
   buttonContainer.appendChild(clearBtn)

   function reSet(){
    const boxes = container.querySelectorAll('div')
    boxes.forEach(box => box.remove())
}

    function reload(){
        clearBtn.addEventListener('click', () =>{
            let x = prompt ("How Many Boxes per Side do you Want?")

            if (x===null || x<1){
                reSet();
                createDivs(16,16);
                blackColor();
                grayColor();
                mysteryColor();
                domdom();
            }
            else if (x>100){
                alert ('enter a number less than 100')
               
            
            }
            
            
            
            else  {
                reSet();
                createDivs(x,x);
                blackColor();
                grayColor();
                mysteryColor();
                domdom();
            }
        })
    }
    reload()
