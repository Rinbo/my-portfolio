document.addEventListener('DOMContentLoaded', () => {
    
    let title = document.getElementById('borjessons');
    let anim = document.getElementById('anim-link') 
    anim.addEventListener('click', (e) => {
        e.preventDefault;
        title.classList.remove('title');
        void title.offsetWidth;
        title.classList.add('title');
    })

    let myNav = document.querySelector('nav');    
    document.addEventListener('scroll', (e) => { 
        
        if (window.scrollY >= 350 ) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } 
        else {
            myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    });
});