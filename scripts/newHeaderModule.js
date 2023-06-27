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

let contentBlock1PanelStatus1 = document.createElement('p');
let contentBlock1PanelStatus2 = document.createElement('p');
let contentBlock1PanelStatus3 = document.createElement('p');
let contentBlock1PanelStatus4 = document.createElement('p');
let contentBlock1PanelStatus5 = document.createElement('p');
let contentBlock1PanelStatus6 = document.createElement('p');

let contentBlock1PanelData1 = document.createElement('p');
let contentBlock1PanelData2 = document.createElement('p');
let contentBlock1PanelData3 = document.createElement('p');
let contentBlock1PanelData4 = document.createElement('p');
let contentBlock1PanelData5 = document.createElement('p');
let contentBlock1PanelData6 = document.createElement('p');

let contentBlock1PanelValue1 = document.createElement('p');
let contentBlock1PanelValue2 = document.createElement('p');
let contentBlock1PanelValue3 = document.createElement('p');
let contentBlock1PanelValue4 = document.createElement('p');
let contentBlock1PanelValue5 = document.createElement('p');
let contentBlock1PanelValue6 = document.createElement('p');


let contentBlock2Sum = document.createElement('h2');
let contentBlock2FormsContainer = document.createElement('div');
let contentBlock2FormBlock1 = document.createElement('div');
let contentBlock2FormBlock2 = document.createElement('div');
let formsContent1 = document.createElement('div');
let formsContent2 = document.createElement('div');
let formBlockTitle1 = document.createElement('h2');
let formBlockTitle2 = document.createElement('h2');

let butArr = document.createElement('span');
let butArr2 = document.createElement('span');
let butArr3 = document.createElement('span');

const flexBox1 = document.createElement('div');
const flexBox2 = document.createElement('div');
const flexBox3 = document.createElement('div');
const flexBox4 = document.createElement('div');

const flexBoxVault1 = [flexBox1,flexBox2];
const flexBoxVault2 = [flexBox3,flexBox4];

const formBox1 = document.createElement('div');
const formBox2 = document.createElement('div');
const formBox3 = document.createElement('div');
const formBox4 = document.createElement('div');
const formBox5 = document.createElement('div');

const formBoxVault1 = [formBox1,formBox2];
const formBoxVault2 = [formBox3,formBox4,formBox5];

const formTransfer = document.createElement('input');
const formAmount = document.createElement('input');
const formRequest = document.createElement('input');
const formConfirmUser = document.createElement('input');
const formConfirmPIN = document.createElement('input');

const transferLabel = document.createElement('label');
const amountLabel = document.createElement('label');
const requestLabel = document.createElement('label');
const userLabel = document.createElement('label');
const pinLabel = document.createElement('label');

const transferBtn = document.createElement('button');
const amountBtn = document.createElement('button');
const requestBtn = document.createElement('button');
const userBtn = document.createElement('button');
const closeBtn = document.createElement('button');

let user1Info = {
   UserName: "User",
   UserPIN: "0000"
};

let contentBlock2CurrBtn = document.createElement('button');

let formCollection = [contentBlock2FormBlock1,contentBlock2FormBlock2];

let formContentCollection = [formsContent1,formsContent2];

let titleCollection = [formBlockTitle1,formBlockTitle2];

let contentBlock2StartBalance = 5000;

let panelVault = [contentBlock1Panel1,contentBlock1Panel2,
 contentBlock1Panel3,contentBlock1Panel4,contentBlock1Panel5,
 contentBlock1Panel6];

 let statusClassVault1 = [contentBlock1PanelStatus1,contentBlock1PanelStatus2,
    contentBlock1PanelStatus4,
    contentBlock1PanelStatus5];

    let statusClassVault2 = [contentBlock1PanelStatus3,contentBlock1PanelStatus6];

    let dataVault = [contentBlock1PanelData1,contentBlock1PanelData2,
        contentBlock1PanelData3,contentBlock1PanelData4,
        contentBlock1PanelData5,contentBlock1PanelData6];

    let summVault = [contentBlock1PanelValue1,contentBlock1PanelValue2,
        contentBlock1PanelValue3,contentBlock1PanelValue4,
        contentBlock1PanelValue5,contentBlock1PanelValue6];

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

    await contentBlock1Panel1.appendChild(contentBlock1PanelStatus1);
    await contentBlock1Panel2.appendChild(contentBlock1PanelStatus2);
    await contentBlock1Panel3.appendChild(contentBlock1PanelStatus3);
    await contentBlock1Panel4.appendChild(contentBlock1PanelStatus4);
    await contentBlock1Panel5.appendChild(contentBlock1PanelStatus5);
    await contentBlock1Panel6.appendChild(contentBlock1PanelStatus6);

    await statusClassVault1.forEach(function(items){
        items.classList.add('panel-item__status1');
        items.textContent = "deposit";
    });

    await statusClassVault2.forEach(function(items){
        items.classList.add('panel-item__status2');
        items.textContent = "withdrawal";
    });


    await contentBlock1Panel1.appendChild(contentBlock1PanelData1);
    await contentBlock1Panel2.appendChild(contentBlock1PanelData2);
    await contentBlock1Panel3.appendChild(contentBlock1PanelData3);
    await contentBlock1Panel4.appendChild(contentBlock1PanelData4);
    await contentBlock1Panel5.appendChild(contentBlock1PanelData5);
    await contentBlock1Panel6.appendChild(contentBlock1PanelData6);

    await dataVault.forEach(function(items){
        items.classList.add('panel-item__data');
    });

    await (contentBlock1PanelData1.textContent = "05/20/23");
    await (contentBlock1PanelData2.textContent = "03/11/23");
    await (contentBlock1PanelData3.textContent = "01/09/23");
    await (contentBlock1PanelData4.textContent = "11/05/22");
    await (contentBlock1PanelData5.textContent = "09/02/22");
    await (contentBlock1PanelData6.textContent = "07/06/22");


    await contentBlock1Panel1.appendChild(contentBlock1PanelValue1);
    await contentBlock1Panel2.appendChild(contentBlock1PanelValue2);
    await contentBlock1Panel3.appendChild(contentBlock1PanelValue3);
    await contentBlock1Panel4.appendChild(contentBlock1PanelValue4);
    await contentBlock1Panel5.appendChild(contentBlock1PanelValue5);
    await contentBlock1Panel6.appendChild(contentBlock1PanelValue6);


    await summVault.forEach(function(items){
        items.classList.add('panel-item__summ');
    });


    await (contentBlock1PanelValue1.textContent = "1000$");
    await (contentBlock1PanelValue2.textContent = "150$");
    await (contentBlock1PanelValue3.textContent = "-500$");
    await (contentBlock1PanelValue4.textContent = "320$");
    await (contentBlock1PanelValue5.textContent = "270$");
    await (contentBlock1PanelValue6.textContent = "-380$");


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

   await contentBlock2FormBlock1.appendChild(formsContent1);
   await contentBlock2FormBlock2.appendChild(formsContent2);

   await formContentCollection.forEach(function(items){
        items.classList.add('form-container');
   });


   await formsContent1.appendChild(formBlockTitle1);
   await formsContent2.appendChild(formBlockTitle2);

   await titleCollection.forEach(function(items){
       items.classList.add('form-container__title');
   });

   await (formBlockTitle1.textContent = "Transfer Money");
   await (formBlockTitle2.textContent = "Close Accaunt");

   await formsContent1.appendChild(flexBox1);
   await formsContent1.appendChild(flexBox2);

   await flexBoxVault1.forEach(function(items){
       items.classList.add('form-container__block');
   }); 

   await flexBox1.appendChild(formBox1);
   await flexBox1.appendChild(formBox2);
   await flexBox1.appendChild(transferBtn);

   await formBoxVault1.forEach(function(items){
       items.classList.add('form-construct');
   });

   await formBox1.appendChild(formTransfer);
   await formBox1.appendChild(transferLabel);

   await formTransfer.classList.add('form-object');
   await formTransfer.setAttribute("type","text");
   await formTransfer.setAttribute("id","fTransfer");
   await formTransfer.setAttribute("name","Transfer");

   await transferLabel.classList.add('form-label');
   await transferLabel.setAttribute("for","fTransfer");
   await (transferLabel.textContent = "Transfer to");


   await transferBtn.classList.add("form-sendler");
   await transferBtn.appendChild(butArr);
   await butArr.classList.add('sendler-arr');
   await (butArr.innerHTML = "&rarr;");



   
   await flexBox2.appendChild(formBox3);
   await flexBox2.appendChild(requestBtn);

   await formBoxVault2.forEach(function(items){
    items.classList.add('form-construct');
   });


   await formBox3.appendChild(formRequest);
   await formBox3.appendChild(requestLabel);

   await formRequest.classList.add('form-object');
   await formRequest.setAttribute("type","number");
   await formRequest.setAttribute("id","fRequest");
   await formRequest.setAttribute("name","Request");

   await requestLabel.classList.add('form-label');
   await requestLabel.setAttribute("for","fRequest");
   await (requestLabel.textContent = "Request Loan");

   await requestBtn.classList.add("form-sendler");
   await requestBtn.appendChild(butArr2);
   await butArr2.classList.add('sendler-arr');
   await (butArr2.innerHTML = "&rarr;");





   await formBox2.appendChild(formAmount);
   await formBox2.appendChild(amountLabel);

   await formAmount.classList.add('form-object');
   await formAmount.setAttribute("type","number");
   await formAmount.setAttribute("id","fAmount");
   await formAmount.setAttribute("name","Amount");

   await amountLabel.classList.add('form-label');
   await amountLabel.setAttribute("for","fAmount");
   await (amountLabel.textContent = "Amount");

   

    await formsContent2.appendChild(flexBox3);
    await flexBox3.appendChild(formBox4);
    await flexBox3.appendChild(formBox5);
    await flexBox3.appendChild(closeBtn);
    await (flexBox3.style.marginBottom = '3rem');
    
   
    await flexBoxVault2.forEach(function(items){
        items.classList.add('form-container__block');
    }); 

    await formBox4.appendChild(formConfirmUser);
    await formBox4.appendChild(userLabel);

   await formConfirmUser.classList.add('form-object');
   await formConfirmUser.setAttribute("type","text");
   await formConfirmUser.setAttribute("id","fConfUser");
   await formConfirmUser.setAttribute("name","Confirm");

   await userLabel.classList.add('form-label');
   await userLabel.setAttribute("for","fConfUser");
   await (userLabel.textContent = "Confirm User");


   await formBox5.appendChild(formConfirmPIN);
   await formBox5.appendChild(pinLabel);

   await formConfirmPIN.classList.add('form-object');
   await formConfirmPIN.setAttribute("type","password");
   await formConfirmPIN.setAttribute("id","fConfPIN");
   await formConfirmPIN.setAttribute("name","ConfirmPIN");

   await pinLabel.classList.add('form-label');
   await pinLabel.setAttribute("for","fConfPIN");
   await (pinLabel.textContent = "Confirm PIN");

   await closeBtn.classList.add("form-sendler");
   await closeBtn.appendChild(butArr3);
   await butArr3.classList.add('sendler-arr');
   await (butArr3.innerHTML = "&rarr;");

   await closeBtn.addEventListener('click',function(closeEvent){
      closeEvent.preventDefault();
      closeEvent.stopPropagation();

      let closeUserForm = formConfirmUser.value;
      let closeUserPIN = formConfirmPIN.value;

      if(closeUserForm == user1Info.UserName && closeUserPIN == +user1Info.UserPIN) {
        newHeader.style.display = "none";
        let headDisplayOn = header.style.display = "block";
        return headDisplayOn;
      } else {
          alert('Something wrong!!!');
      }
      
      
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