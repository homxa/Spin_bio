
const nav = document.querySelector('.js-nav');
const image = document.querySelector('.js-image');
const cover = document.querySelector('.js-cover');
cover.addEventListener('click',()=>{
        if(nav.style.right === '-250px'){
           nav.style.right = '0px';
           image.src = 'menus.png';
        }
        else{
                nav.style.right = '-250px';
                image.src = 'menu.png';
        }
})