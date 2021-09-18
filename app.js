const upButton = document.querySelector('.up-btn')
const downButton = document.querySelector('.down-btn')
const leftSlide = document.querySelector('.left-container')
const rightSlide = document.querySelector('.right-container')
const imageSlide = document.querySelector('.image')

upButton.addEventListener('click',()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))

let indexSlide = 0

function changeSlide(direction){
    console.log(indexSlide)
    if (direction==='up'){
        indexSlide++
        if(indexSlide>4){
            indexSlide=0
        }
    }else if(direction==='down'){
        indexSlide--
        if(indexSlide<0){
            indexSlide=4
        }
    }
    
    rightSlide.style.transform = `translateY(${(indexSlide*100)-400}vh)`
    leftSlide.style.transform = `translateY(-${indexSlide*100}vh)`


}