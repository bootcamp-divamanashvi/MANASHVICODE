
var icon = document.getElementById("toggle-btn");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}

let body=document.body;

let profile=document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick=()=>{
profile.classList.toggle('active');
searchForm.classList.remove('active');
}


let searchForm=document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');

}

let sideBar=document.querySelector('.side-bar');

document.querySelector('#menu-bar').onclick=()=>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('.side-bar .close-btn').onclick=()=>{
    sideBar.classList.remove('active');
    body.classList.remove('active');

}

window.onscroll=()=>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if(window.innerWidth<1200){
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}






