let header = document.querySelector('.header');
let newHeader = document.createElement('header');
let newHeaderContainer = document.createElement('div');
let newHeaderContent = document.createElement('div');
let contentBlock1 =  document.createElement('div');
let contentBlock2 =  document.createElement('div');
let body = document.querySelector('.body');

let contentBlock1Welcome = document.createElement('h2');
let contentBlock1Panels = document.createElement('div');
let contentBlock1LogTime = document.createElement('h2');
let contentBlock1Panel1 = document.createElement('div');
let contentBlock1Panel2 = document.createElement('div');
let contentBlock1Panel3 = document.createElement('div');
let contentBlock1Panel4 = document.createElement('div');
let contentBlock1Panel5 = document.createElement('div');
let contentBlock1Panel6 = document.createElement('div');


let contentBlock2Sum = document.createElement('h2');
let contentBlock2FormsContainer = document.createElement('div');
let contentBlock2FormBlock1 = document.createElement('div');
let contentBlock2FormBlock2 = document.createElement('div');
let contentBlock2CurrBtn = document.createElement('button');

let formCollection = [contentBlock2FormBlock1,contentBlock2FormBlock2];

let contentBlock2StartBalance = 0;

let panelVault = [contentBlock1Panel1,contentBlock1Panel2,
 contentBlock1Panel3,contentBlock1Panel4,contentBlock1Panel5,
 contentBlock1Panel6];

 let newTimeHours = new Date().getHours();
 let newTimeSeconds = new Date().getMinutes();

let newHeaderLoad = async function() {
    let headDisplay = header.style.display = "none";
    let newHeadPlace = body.after(newHeader);
    let newHeadClass = newHeader.classList.add('new-header');

    await  headDisplay;
    await newHeadPlace;
    await newHeadClass;
};


let newHeaderContainerLoad = async function() {
    let newHeadPlaceContainer =   newHeader.appendChild(newHeaderContainer);
    let newHeadClassContainer = newHeaderContainer.classList.add('new-header__container');

   await newHeadPlaceContainer;
   await newHeadClassContainer;
};


let newHeaderContentLoad = async function() {
    let newHeadPlaceContent =  newHeaderContainer.appendChild(newHeaderContent);
    let newHeadClassContent =  newHeaderContent.classList.add('nh-content-block');

   await  newHeadPlaceContent;
   await  newHeadClassContent;
};


let contentBlocksLoad = async function() {
    let contentBlock1Place =  newHeaderContent.appendChild(contentBlock1);
    let contentBlock2Place = newHeaderContent.appendChild(contentBlock2);
    let contentBlock1Class =  contentBlock1.classList.add('content-in-block');
    let contentBlock2Class =  contentBlock2.classList.add('content-in-block');


   await contentBlock1Place;
   await contentBlock2Place;
   await contentBlock1Class;
   await contentBlock2Class;
};


let contentBlock1Load = async function() {
    await contentBlock1.appendChild(contentBlock1Welcome);
    await  contentBlock1Welcome.classList.add('content-welcome');
    await (contentBlock1Welcome.textContent = "Good day,user!");


    await contentBlock1.appendChild(contentBlock1Panels);
    await contentBlock1Panels.classList.add('content-panels-collection');


    await contentBlock1Panels.appendChild(contentBlock1Panel1);
    await contentBlock1Panels.appendChild(contentBlock1Panel2);
    await contentBlock1Panels.appendChild(contentBlock1Panel3);
    await contentBlock1Panels.appendChild(contentBlock1Panel4);
    await contentBlock1Panels.appendChild(contentBlock1Panel5);
    await contentBlock1Panels.appendChild(contentBlock1Panel6);


    await panelVault.forEach(function(items){
         items.classList.add('panel-item');
    });


    await contentBlock1.appendChild(contentBlock1LogTime);
    await contentBlock1LogTime.classList.add('content-time');
    await (contentBlock1LogTime.textContent = `You will be logged in ${newTimeHours}:${newTimeSeconds}`);
};


let contentBlock2Load = async function() {
   await contentBlock2.appendChild(contentBlock2Sum);
   await contentBlock2Sum.classList.add('content-sum');
   await (contentBlock2Sum.textContent = `Current Balance: ${contentBlock2StartBalance}$`);


   await contentBlock2.appendChild(contentBlock2FormsContainer);
   await contentBlock2FormsContainer.classList.add('content-forms');


   await contentBlock2FormsContainer.appendChild(contentBlock2FormBlock1);
   await contentBlock2FormsContainer.appendChild(contentBlock2FormBlock2);

   await formCollection.forEach(function(items) {
       items.classList.add('form-content');
   });


   await contentBlock2.appendChild(contentBlock2CurrBtn);
   await contentBlock2CurrBtn.classList.add('content-btn');
   await (contentBlock2CurrBtn.textContent = 'Currency');
};
// let newHeaderLoad = new Promise(function(resolve,reject){
//     header.style.display = "none";
//     resolve();
// }).then(function(){
//     body.after(newHeader);
// }).then(function(){
//     newHeader.classList.add('new-header');
// });


// let newHeaderContainerLoad = new Promise(function(resolve,reject){
//     newHeader.appendChild(newHeaderContainer);
//     resolve();
// }).then(function(){
//     newHeaderContainer.classList.add('new-header__container');
// });


// let newHeaderContentLoad = new Promise(function(resolve,reject){
//     newHeaderContainer.appendChild(newHeaderContent);
//     resolve();
// }).then(function(){
//     newHeaderContent.classList.add('nh-content-block');
// });


// let contentBlocksLoad = new Promise(function(resolve,reject){
//     newHeaderContent.appendChild(contentBlock1);
//     newHeaderContent.appendChild(contentBlock2);
//     resolve();
// }).then(function(){
//     contentBlock1.classList.add('content-in-block');
//     contentBlock2.classList.add('content-in-block');
// });


let asyncVault = [newHeaderLoad,newHeaderContainerLoad,
newHeaderContentLoad,contentBlocksLoad,contentBlock1Load,
contentBlock2Load];




export {asyncVault};