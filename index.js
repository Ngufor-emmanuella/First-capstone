const ham = document.getElementById('ham');
const div = document.querySelector('hide');
ham.addEvenListerner('click', () => {
  div.classList.remove('hide');
  ham.classList.add('hide');
  document.querySelector('.box').classList.remove('blur');
});

const links =document.querySelectorAll('.navlink');
links.forEach((link) => {
  link.addEventListerner('click', () => {
    div.classList.add('hide');
    ham.classList.remove('hide');
    document.querySelector('.box').classList.remove('blur');
  })
})
