const black = document.querySelector('.box1');
const blue = document.querySelector('.box2');
const green = document.querySelector('.box3');
const yellow = document.querySelector('.box4');

black.addEventListener('click',function(){
    document.body.style.backgroundColor = "black";
})

blue.addEventListener('click',function(){
    document.body.style.backgroundColor = "blue";
})
green.addEventListener('click',function(){
    document.body.style.backgroundColor = "green";
})
yellow.addEventListener('click',function(){
    document.body.style.backgroundColor = "yellow";
})