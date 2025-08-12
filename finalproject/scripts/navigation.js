export function navigation() {
     const navButtom = document.querySelector('#hamburger');
     console.log('navButtom:', navButtom);


     const navLinks = document.querySelector('#nav-bar');
    console.log('navLinks:', navLinks);
     navButtom.addEventListener('click', () => {
          console.log('Hamburger clicked');
          navButtom.classList.toggle('show')
          navLinks.classList.toggle('show')
     });
}
