"use strict";
// import {header,newHeader,newHeaderContainer,newHeaderContent,
//   contentBlock1,contentBlock2,promisesVault,loadCont} from "./newHeaderModule";

   import {asyncVault}  from "./newHeaderModule";

const icon5 = document.querySelector('.nav-icon-5'); 
let burgerMenuShadow = document.querySelector('.nav-icon--shadow');
let mainColumn = document.querySelector('.header-right-column');
let columnMenu = document.querySelector('.column-main-menu');
let columnIcon = document.querySelector('.column-icon');
let mainWarning = document.querySelector('.main-warning');
let windowWarning = document.querySelector('.main-warning--window');
let columnIcon2 = document.querySelector('.column-icon--shadow');
let warningClose = document.querySelector('.warn-close');
let formsBtn = document.querySelector('.forms-btn');
let formUser = document.querySelector('.form--user');
let formPIN = document.querySelector('.form--pin');


let columnWandH = 100;
let warnOpacity = 1;

class dataUser {
  // #user;
  // #pin;
 constructor(user,pin) {
    this._user = user;
    this._pin = pin;
 }
}

let userExample = new dataUser("User",'0000');



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

  burgerMenuShadow.addEventListener('click',function(e2){
      burgerMenuShadow.classList.toggle("open");
     


      if (mainColumn.offsetHeight !== columnWandH){
        mainColumn.style.height = "100px";
        columnMenu.style.display = "none";
        mainColumn.style.flexDirection = "row";
        mainColumn.style.justifyContent = "space-between";
      } else {
        mainColumn.style.height = "65%";
        mainColumn.style.width = "100%";
        mainColumn.style.position = "absolute";
        mainColumn.style.zIndex = "100";
        columnMenu.style.display = "flex";
        mainColumn.style.flexDirection = "column";
        mainColumn.style.justifyContent = "space-around";
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


  columnIcon2.addEventListener('click',function(event2){
    event2.preventDefault();
    event2.stopPropagation();

    mainColumn.style.display = "none";
    windowWarning.style.display = "flex";
  });


  warningClose.addEventListener('click',function(event3){
    event3.preventDefault();
    event3.stopPropagation();

    mainColumn.style.display = "flex";
    windowWarning.style.display = "none";
  });

 formsBtn.addEventListener('click',function(event4){
     event4.preventDefault();
     event4.stopPropagation();

     let formUserData = formUser.value;
     let formPINData = formPIN.value;

     if(formUserData == userExample._user && formPINData == +userExample._pin){
        asyncVault.forEach(function(items){
          return items();
        });
     } else {
        alert('Something wrong!');
     }

     
     

    
      // header.style.display = "none";
      // body.after(newHeader);
      // newHeader.classList.add('new-header');

      // newHeader.appendChild(newHeaderContainer);
      // newHeaderContainer.classList.add('new-header__container');

      // newHeaderContainer.appendChild(newHeaderContent);
      // newHeaderContent.classList.add('nh-content-block');

      // newHeaderContent.appendChild(contentBlock1);
      // newHeaderContent.appendChild(contentBlock2);
      // contentBlock1.classList.add('content-in-block');
      // contentBlock2.classList.add('content-in-block');
  });
 

  
  