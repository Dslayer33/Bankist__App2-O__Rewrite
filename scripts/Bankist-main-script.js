"use strict";



const icon5 = document.querySelector('.nav-icon-5'); 
let mainColumn = document.querySelector('.header-right-column');
let columnMenu = document.querySelector('.column-main-menu');
let columnIcon = document.querySelector('.column-icon');
let mainWarning = document.querySelector('.main-warning');
let columnWandH = 100;
let warnOpacity = 1;


  icon5.addEventListener('click', (event) => {
    icon5.classList.toggle("open");

   
    if (mainColumn.offsetWidth !== columnWandH){
      mainColumn.style.width = "100px";
      columnMenu.style.display = "none";
    } else {
      mainColumn.style.width = "50%";
      mainColumn.style.position = "absolute";
      mainColumn.style.zIndex = "100";
      columnMenu.style.display = "flex";
    }

   
  });


  columnIcon.addEventListener('click',function(event1){
     event1.preventDefault();
     event1.stopPropagation();

     if (mainWarning.style.opacity == warnOpacity){
      mainWarning.style.opacity = "0";
      mainWarning.style.visibility = "hidden";
      mainWarning.animate([
        {
         visibility: 'visible',
         opacity: '1'
        },

        {
         visibility: 'hidden',
         opacity: '0'
        }
     ], {
       duration: 1500,
       iterations: 1,
       easing: "linear"
     });


      columnIcon.animate([
        {
          transform: 'rotate(0deg)'
        },

        {
          transform: 'rotate(-360deg)'
        }
     ], {
        duration: 1000,
        iterations: 1,
        easing: "linear"
       }
     );
    } else {
      mainWarning.style.opacity = "1";
      mainWarning.style.visibility = "visible";
      mainWarning.animate([
        {
         visibility: 'hidden',
         opacity: '0'
        },

        {
         visibility: 'visible',
         opacity: '1'
        }
     ], {
       duration: 1500,
       iterations: 1,
       easing: "linear"
     });


     columnIcon.animate([
      {
        transform: 'rotate(0deg)'
      },

      {
        transform: 'rotate(360deg)'
      }
     ], {
      duration: 1000,
      iterations: 1,
      easing: "linear"
     }
      );
    }

   
  });