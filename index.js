const ham = document.getElementById('ham');
const mobileNav = document.getElementById('hide')
ham.addEventListener('click', () => {
  mobileNav.style.left = '0';
 mobileNav.style.right = '0';
});

// const links =document.querySelectorAll('.navlink');
// links.forEach((link) => {
//   link.addEventListerner('click', () => {
//     div.classList.add('hide');
//     ham.classList.remove('hide');
//     document.querySelector('.box').classList.remove('blur');
//   })
// })

// This will listen for clicks on the X button
const closebtn = document.querySelector('.markx');
closebtn.addEventListener('click', () => {
 mobileNav.style.left = '-100vw';
 mobileNav.style.right = '100vw';
})
