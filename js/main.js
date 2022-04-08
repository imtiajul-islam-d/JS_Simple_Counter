const picture = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
]
let counter = 0 ;
const buttons = document.querySelectorAll('.btn');
const imageDIV =  document.querySelector('.img-container');

buttons.forEach(function(button){
    button.addEventListener('click' , function(){
        if(button.classList.contains('btn-left')){
            counter--
            if(counter < 0){
                counter = picture.length - 1; 
            }
            imageDIV.style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`
        }
        if(button.classList.contains('btn-right')){
            counter++
            if(counter > picture.length - 1){
                counter = 0
            }
            imageDIV.style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`
        }
    })
})