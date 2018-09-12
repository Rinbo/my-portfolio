document.addEventListener('DOMContentLoaded', () => {
    setTimeout
    let myNav = document.querySelector('nav');    
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