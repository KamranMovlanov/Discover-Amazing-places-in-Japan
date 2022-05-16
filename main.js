//Затемнение header при скролле 
(function () { 
    const header = document.querySelector(".header");

    window.onscroll = () => {
        if(window.pageYOffset > 50) { 
            header.classList.add("header__active");
        }
       else{
        header.classList.remove("header__active"); 
       }
    }

}());


// Burger menu
(function burgerMenuAll(){
    const burger = document.querySelector(".burger");
    const headerClose = document.querySelector(".header__nav-close");
    const headerNav = document.querySelector(".header__nav");

    //Add    
    burger.addEventListener('click', () => { 
        headerNav.classList.add("header__nav-active");
    });
    
    //Remove
    headerClose.addEventListener('click', () => {  
        headerNav.classList.remove("header__nav-active");
    });

}());

