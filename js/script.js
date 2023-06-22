const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    action.classList.toggle("is-active");
} ) ;


window.onscroll = function (){
    menu.classList.remove("is-active");
    action.classList.remove("is-active");
}


    

let btn = document.getElementById('btn');

btn.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if( document.body.classList.contains('dark-theme')){
        btn.innerHTML = 'Night';

    }else{
        btn.innerHTML = 'Dark';
    }
}