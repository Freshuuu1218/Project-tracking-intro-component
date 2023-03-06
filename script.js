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

window.addEventListener('resize',()=>{
    if(window.innerWidth > 768){
        menuBtn.style.display = 'none';
        nav.style.display = 'flex';
    }else{
        menuBtn.style.display = 'flex';
        nav.style.display = 'none';
    }
})