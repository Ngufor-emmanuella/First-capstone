const ham = document.getElementById('ham');
const mobileNav = document.getElementById('hide');
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
});
/* main program zone */
const data = [
  {
    image: 'fa-solid fa-masks-theater',
    heading: 'CC Exhuibition',
    paragraph: 'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.',
  },
  {
    image: 'fa-solid fa-masks-theater',
    heading: 'CC Exhuibition',
    paragraph: 'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.',
  },
  {
    image: 'fa-solid',
    heading: 'CC Exhuibition',
    paragraph: 'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.',
  },
  {
    image: 'fa-solid fa-masks-theater',
    heading: 'CC Exhuibition',
    paragraph: 'Appreciate various creations applying CC license of artist, organised from Art Center Nabi.',
  },
];
const mainProHead = document.querySelector('#procarthead');
mainProHead.innerHTML = 'Main Program';
function Cartdisplay() {
  for (let i = 0; i < data.length; i += 1) {
    const mainProContent = document.getElementById('cartContainer');
    const cart = document.createElement('div');
    cart.classList.add('box2a');
    const divImg = document.createElement('div');
    divImg.classList.add('box2a-img');
    const iconImg = document.createElement('i');
    iconImg.classList.add('fa-solid');
    iconImg.classList.add('fa-masks-theater');
    const cartHead = document.createElement('h2');
    cartHead.innerHTML = data[i].heading;
    const cartPara = document.createElement('p');
    cartPara.innerHTML = data[i].paragraph;
    /* Need to append all the element to it various parent */
    mainProContent.appendChild(cart);
    cart.appendChild(divImg);
    divImg.appendChild(iconImg);
    cart.appendChild(cartHead);
    cart.appendChild(cartPara);
  }
}
Cartdisplay(data);
const featureData = [
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
  {
    image: 'images/image1.jfif',
    head: 'Yochai Benkler',
    subHead: 'Berkman proffessor of entrepenuerial legal studies at havard law school.',
    para: 'Benkler studies common-based peer production, and ',
  },
];
function featureDisplay() {
  const featureMain = document.querySelector('.box3a');
  for (let i = 0; i < featureData.length; i++) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('box3b');
    const imgfeature = document.createElement('img');
    imgfeature.classList.add('image');
    imgfeature.setAttribute('src', featureData[i].image);
    imgfeature.setAttribute('alt', 'picture of a man');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardHead = document.createElement('h2');
    cardHead.innerHTML = featureData[i].head;
    const cardSubHead = document.createElement('h6');
    cardSubHead.innerHTML = featureData[i].subHead;
    const cardHr = document.createElement('hr');
    cardHr.classList.add('thirdline');
    const paraCard = document.createElement('p');
    paraCard.innerHTML = featureData[i].para;
    // appending all the elemets
    featureMain.appendChild(cardContent);
    cardContent.appendChild(imgfeature);
    cardContent.appendChild(card);
    card.appendChild(cardHead);
    card.appendChild(cardSubHead);
    card.appendChild(cardHr);
    card.appendChild(paraCard);
  }
}
featureDisplay(featureData);