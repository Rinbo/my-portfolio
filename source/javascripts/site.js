document.addEventListener('DOMContentLoaded', () => {
    setTimeout
    let myNav = document.querySelector('nav');
    /*let borjessons = document.getElementById('borjessons')
    setTimeout( () => {
        borjessons.classList.add('title-background')
    },500)*/
    document.addEventListener('scroll', (e) => { 
        
        if (window.scrollY >= 300 ) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    });
});