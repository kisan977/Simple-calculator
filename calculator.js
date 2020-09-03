const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.btn-clear');
const equalBtn = document.querySelector('.btn-equal');




for (let i = 0; i<btns.length;i++){


btns[i].addEventListener('click',function(){


let number = btns[i].getAttribute('data-num');
screen.value += number;


});

}

equalBtn.addEventListener('click',function(){
let value = eval(screen.value);
screen.value = value;

});


clearBtn.addEventListener('click',function(){

screen.value = '';

});

