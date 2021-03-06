const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnRgb = document.createElement('button');
const btnGray = document.createElement('button');
const section = document.querySelector('.section');
const btnSize = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

window.onload = ()=> {}
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () =>{
        box.style.background = 'black'
    }))

function createDivs(col, rows) {
    for(let i = 0; i <(col * rows); i++){
       const div = document.createElement('div')
    //    div.style.border = '1px solid red'
       container.style.grideTemplateColumns = `repeat(${col}, ifr)`;
       container.style.grideTemplateRows = `repeat(${rows}, ifr)`;
       container.appendChild(div).classList.add('box')
    }
}

createDivs(16,16);

function blackColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = "Black"
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor = rgba
            box.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor();

function rgbColor() { 
    
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', ()=> {
            let R = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${R},${B},${G})`
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}


function reSet(){
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.remove())
}

function reSize(){
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('Click', () => {
        let user = prompt('what size do you want your grid to be?')
        if (user === null || user < 1){
            reSet();
            createDivs(16,16);
            blackColor();
            grayColor();
            rgbColor();
        }
        else {

            reSet();
            createDivs(user,user);
            blackColor();
            grayColor();
            rgbColor();

        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()

function backgroundAnim(){
    colors = ['red', 'blue', 'yellow', 'green']
    const section = document.querySelector('.section')
    const span = document.createElement('span')

    let size = Math.random() * 50;

    span.style.width = 10 + size + 'px'
    span.style.height = 10 + size + 'px'

    span.style.borderRadius = `${size}%`
    span.style.top = Math.random() * innerHeight + 'px'
    span.style.left = Math.random() * innerHeight + 'px'

    const backgroundColor = colors[Math.floor(Math.random() * colors.length)]

    span.style.background = backgroundColor;
    section.appendChild(span)

    setTimeout(() => {span.remove()}, 5000)
}
setInterval(backgroundAnim, 500);


