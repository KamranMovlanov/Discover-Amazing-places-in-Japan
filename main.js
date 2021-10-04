(function () { //Самовызывающаяся функция(скрипт для изменения цвета фона при скроллинге)

    const header = document.querySelector(".header");
    window.onscroll = () => { //При скролле
        if(window.pageYOffset > 50) { //Если спустимся вниз на 50px
            header.classList.add("header__active"); // Добавь класс(заренее добавил в style.css "header__active")* Сделал вместо add toggle(моргало при скролле)
        }
       else{
        header.classList.remove("header__active"); //Если вернешься на место, < 50px то удаляй класс с затемнением
       }
    }

}());



// Burger menu

//SELECTORS
const burger = document.querySelector(".burger");
const headerClose = document.querySelector(".header__nav-close");


//EVENTS
burger.addEventListener('click', burgerMenu);
headerClose.addEventListener('click', burgerClose);




//FUNCTION
function burgerMenu(){
    const headerNav = document.querySelector('.header__nav');
    headerNav.classList.add("header__nav-active");
}


function burgerClose(){
    const headerNav = document.querySelector('.header__nav');
    headerNav.classList.remove("header__nav-active");
}