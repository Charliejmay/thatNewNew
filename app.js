const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        

        links.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7} + 1s`;
            }
        });


        //Hamburger Animation
        hamburger.classList.toggle('toggle');
    });
}

const app = () => {
    navSlide();    
}

app();