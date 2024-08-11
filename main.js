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
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    centeredSlides: true,
    autoplay:true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Pagination (dot indicators)
    pagination: {
      el: '.swiper-pagination',  // Element where pagination (dots) will be rendered
      clickable: true,           // Makes pagination dots clickable
    },
  
    // Responsive breakpoints
    breakpoints: {
      424: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 6,
        spaceBetween: 50
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
  dropdown2.style.display ='none';}
  );