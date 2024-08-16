const menuButton = document.querySelector('.icon'); 
const menuIcon = document.querySelector('.fa-bars'); 
const menuBar = document.querySelector('.sidelist'); 

menuButton.addEventListener('click', function() {
    menuBar.classList.toggle('sidelist-visible');
    menuIcon.classList.toggle('fa-xmark');
   
});
const cards = document.querySelectorAll('.powerCard');
const hcolors = document.querySelectorAll('.colorChange');

cards.forEach((card, index) => {
    card.addEventListener('mouseover', function() {
        hcolors[index].style.color = '#ffc451';
        card.style.borderColor = '#ffc451';
    });
    
    card.addEventListener('mouseout', function() {
        hcolors[index].style.color = ''; // Reset color or set to original color
        card.style.borderColor = ''; // Reset border color or set to original color
    });
});



// -------------------slider-------------------


const swiper = new Swiper(".swiper", {
  // Optional parameters
  // centeredSlides: true,
  // slidesPerView: 1,
  //  grabCursor: true,
  //  freeMode: false,
   loop: true,
  // mousewheel: false,
  // keyboard: {
  //   enabled: true
  // },

  // Enabled autoplay mode
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true
  },

 

  // Responsive breakpoints
  breakpoints: {
    310: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    426:{
      slidesPerView: 3,
      spaceBetween: 60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    1024: {
      slidesPerView: 6,
      spaceBetween:70
    }
  }
});





// portfolio------------------
const all = document.querySelector('.pall');
const app = document.querySelector('.papp');
const card = document.querySelector('.pcard');
const web = document.querySelector('.pweb');
const items = document.querySelectorAll('.item'); 
const mapp = document.querySelectorAll('.app');
const mcard = document.querySelectorAll('.card');
const mweb = document.querySelectorAll('.web');
const fristItem = document.querySelectorAll('.item1'); 

const buttons = [all, app, card, web];

buttons.forEach(button => {
    button.addEventListener('click', function() {
    
        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
         
       
        });
        
     
        button.style.backgroundColor = '#ffc451';
    
        button.style.borderRadius = '5px';
    });
});

all.addEventListener('click', function() {
   
    items.forEach(item => {
        item.style.display = 'block';
    });
});

// section animation----------------------
const sections = document.getElementsByTagName('section');

// Function to check section positions and apply animation
function animateSections() {
    for (let i = 0; i < sections.length; i++) {
        const sectionPosition = sections[i].getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;

        if (sectionPosition < screenPosition) {
            sections[i].classList.add('animate');
        }
    }
}

// Trigger animation on page load
window.addEventListener('load', animateSections);

// Trigger animation on scroll
window.addEventListener('scroll', animateSections);



// Dropdown 1
const down1 = document.querySelector('.down1');
const dropdown1 = document.querySelector('.dropdown1');

// Show dropdown1 on mouseenter
down1.addEventListener('mouseenter', function() {
  dropdown1.style.display = 'block';
});

// Hide dropdown1 when the mouse leaves both down1 and dropdown1
down1.addEventListener('mouseleave', function(event) {
  if (!dropdown1.contains(event.relatedTarget)) {
    dropdown1.style.display = 'none';
  }
});

dropdown1.addEventListener('mouseleave', function(event) {
  if (!down1.contains(event.relatedTarget)) {
    dropdown1.style.display = 'none';
  }
});

// Dropdown 2
const down2 = document.querySelector('.down2');
const dropdown2 = document.querySelector('.dropdown2');

// Show dropdown2 on mouseenter
down2.addEventListener('mouseenter', function() {
  dropdown2.style.display = 'block';
});

// Hide dropdown2 when the mouse leaves both down2 and dropdown2
down2.addEventListener('mouseleave', function(event) {
  if (!dropdown2.contains(event.relatedTarget))
  dropdown2.style.display ='none'}
  );
