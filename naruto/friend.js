const friend = document.querySelector('.buttondiv')
const not = document.querySelector('.not')

let flag = false;

friend.addEventListener('click' ,function(){
    if (flag === false) {
        not.innerHTML ="friend";
        not.style.color = "green";
        friend.innerHTML = "remove friend";
        flag = true;
    }
    else if (flag === true){
        not.innerHTML ="not friends";
        not.style.color = "red";
        friend.innerHTML = "add friend";
        flag = false;
    }
});
