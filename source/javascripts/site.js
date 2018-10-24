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

function openModal(index) {
    let modal = document.getElementById(`myModal_${index}`)
    let span = document.getElementsByClassName("close")[index];   
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function scrollToElementWithId(id) {
    let name = "";
    switch (id) {
        case 0:
            name = "top"
        break;
        case 1:
            name = "projects"
        break;
        case 2:
            name = "about"
        break;            
        default:
            scrollToElementWithId(0);
    }
    document.getElementById(name).scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}  