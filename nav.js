const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {

// toggling the nav bar

    nav.classList.toggle('nav-active');

//animate links
navLinks.forEach((link, index) => {
    if (link.style.animation){
        link.style.animation = '';
    } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }   
});
//burger animation
burger.classList.toggle('toggle');
});

}


navSlide();

const body = document.querySelector("body");
        const navigation = document.querySelector(".navigation");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = ()=>{
          navigation.classList.add("show");
          menuBtn.classList.add("hide");
          body.classList.add("disabled");
        }
        cancelBtn.onclick = ()=>{
          body.classList.remove("disabled");
          navigation.classList.remove("show");
          menuBtn.classList.remove("hide");
        }
        window.onscroll = ()=>{
          this.scrollY > 20 ? navigation.classList.add("sticky") : navigation.classList.remove("sticky");
        }

body();