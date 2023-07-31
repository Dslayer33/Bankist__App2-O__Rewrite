

let warnModalBlock = document.createElement('div');
 warnModalBlock.classList.add('warn-modal-block');

let warnModalContent = document.createElement('div');
warnModalContent.classList.add('warn-modal-content');

let warnModalItem = document.createElement('div');
warnModalItem.classList.add('warn-modal-item');

let warnModalxIcon = document.createElement('div');
warnModalxIcon.innerHTML = '&#10006';
warnModalxIcon.classList.add('warn-modal-icon');

warnModalxIcon.addEventListener('click',function(event) {
   event.preventDefault();
   event.stopPropagation();

   warnModalBlock.style.opacity = "0";
   warnModalBlock.style.visibility = "hidden";
});

let warnMainContentBlock = document.createElement('div');
warnMainContentBlock.classList.add('warn-main-block');

let warnIconAlert = document.createElement('div');
warnIconAlert.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#c91d1d" viewBox="0 0 256 256"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg>';
warnIconAlert.classList.add('warn-alert-icon');

let warnMainTextBox = document.createElement('div');
warnMainTextBox.classList.add('warn-text-box');

let warnMainText = document.createElement('h3');
warnMainText.classList.add('warn-main-text');
warnMainText.textContent = "Please enter your username and password!";


warnModalBlock.appendChild(warnModalContent);
warnModalContent.appendChild(warnModalItem);
warnModalItem.appendChild(warnModalxIcon);
warnModalItem.appendChild(warnMainContentBlock);
warnMainContentBlock.appendChild(warnIconAlert);
warnMainTextBox.appendChild(warnMainText);
warnMainContentBlock.appendChild(warnMainTextBox);


// let WarningModalWindow = async function () {
  

//     warnModalBlock = document.createElement('div');
//     await warnModalBlock.classList.add('warn-modal-block');

//     warnModalContent = document.createElement('div');
//     await warnModalContent.classList.add('warn-modal-content');

//     warnModalItem = document.createElement('div');
//     await warnModalItem.classList.add('warn-modal-item');

//     await warnModalBlock.appendChild(warnModalContent);
//     await warnModalContent.appendChild(warnModalItem);

//     return warnModalBlock,warnModalContent,warnModalItem;

// };

// let warnContainer = document.createElement('div');
// warnContainer.appendChild(WarningModalWindow);
// document.appendChild(warnContainer);

// customElements.define('wcia-warning-window',WarningModalWindow);


// if (!customElements.get('wcia-warning-window')) {
//          customElements.define('wcia-warning-window',WarningModalWindow);
//     }


export {warnModalBlock}; 



