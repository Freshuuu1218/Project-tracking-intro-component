const nav = document.querySelector('nav');
const menuBtn = document.querySelector('#menu');

menuBtn.addEventListener('click',()=>{
    if(menuBtn.getAttribute('src') ==='./images/icon-hamburger.svg'){
        menuBtn.setAttribute('src','./images/icon-close.svg');
        nav.style.display = 'flex';
    }else{
        menuBtn.setAttribute('src','./images/icon-hamburger.svg');
        nav.style.display = 'none';
    }
})