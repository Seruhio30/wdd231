export function navigation() {
     const navButtom = document.querySelector('#hamburger');
     const navLinks = document.querySelector('#nav-bar');

     navButtom.addEventListener('click', () => {

          navButtom.classList.toggle('show')
          navLinks.classList.toggle('show')
     });
}
