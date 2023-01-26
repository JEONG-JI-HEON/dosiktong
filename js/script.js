var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `
      <span class='${className} ${'pagination' + index}'>${index + 1}
      <span class='pagination-bar'></span>
      </span>
      `;
    },
  },
});

console.log(window.scrollY);

window.addEventListener('scroll', ()=>{
  let header = document.querySelector('header');
  let font = document.querySelectorAll('nav ul li a')
  let logo = document.querySelector('header img')
  if(window.scrollY != 0){
    header.style.backgroundColor = 'white';
    header.style.height = '79px';
    font.forEach(font =>{
      font.style.color = 'black';
    });
    logo.src = 'img/logo_blue.png'
    
  } else{
    header.style.backgroundColor = 'inherit';
    header.style.height = '99px';
    font.forEach(font =>{
      font.style.color = 'white';
    })
    logo.src = 'img/logo_white.png'
  } 
})

