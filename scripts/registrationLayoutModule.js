


let renderRegLayoutBackground = async function () {
    let renderBody = document.body;
    let renderRegFone = document.createElement('header');
    let renderRegMainBlock = document.createElement('div');
    let renderRegMainText = document.createElement('h3'); 
    let renderFormsBlock = document.createElement('div');

    let renderFormInnerBlock1 =  document.createElement('div');
    let renderFormInnerBlock2 =  document.createElement('div');
    let renderFormInnerBlock3 =  document.createElement('div');
    let renderFormInnerBlock4 =  document.createElement('div');
    let renderFormInnerVault = [renderFormInnerBlock1,renderFormInnerBlock2,
        renderFormInnerBlock3,renderFormInnerBlock4];

    let renderUserBtn = document.createElement('button');  
    let renderUserBtnText = document.createElement('h3');

    let renderUserLogText = document.createElement('a');

    let renderUserNameForm = document.createElement('input');
    let renderEmailForm = document.createElement('input');
    let renderPINForm = document.createElement('input');
    //let renderConfirmPINForm = document.createElement('input');

    let userNameLabel = document.createElement('label');
    let emailLabel = document.createElement('label');
    let PINLabel = document.createElement('label');
    //let PINconfirmLabel = document.createElement('label');

    await renderBody.after(renderRegFone);
    await renderRegFone.classList.add('registr-layout');
    await (renderRegFone.style.display = 'block');
    await renderRegFone.appendChild(renderRegMainBlock);
    await renderRegMainBlock.classList.add('registr-main-block');


    await renderRegMainBlock.appendChild(renderRegMainText);
    await renderRegMainText.classList.add('reg-main-text');
    await (renderRegMainText.textContent = "New account");


    await renderRegMainBlock.appendChild(renderFormsBlock);
    await renderFormsBlock.classList.add('reg-forms-block');

    


    await renderFormsBlock.appendChild(renderFormInnerBlock1);
    await renderFormsBlock.appendChild(renderFormInnerBlock2);
    await renderFormsBlock.appendChild(renderFormInnerBlock3);
    

    await renderFormInnerVault.forEach(function(items) {
        items.classList.add('reg-form-item');
    });

    {
      await renderFormInnerBlock1.appendChild(userNameLabel);
      await userNameLabel.classList.add('reg-form-label');
      await userNameLabel.setAttribute('for',"IdUserName");
      await (userNameLabel.textContent = "User Name");

      await renderFormInnerBlock1.appendChild(renderUserNameForm);
      await renderUserNameForm.classList.add('reg-form-input');
      await renderUserNameForm.setAttribute('id',"IdUserName");
      await renderUserNameForm.setAttribute('type',"text");
      await renderUserNameForm.setAttribute('name',"UserName");
    }



    {
      await renderFormInnerBlock2.appendChild(emailLabel);
      await emailLabel.classList.add('reg-form-label');
      await emailLabel.setAttribute('for',"IdEmail");
      await (emailLabel.textContent = "Email");

      await renderFormInnerBlock2.appendChild(renderEmailForm);
      await renderEmailForm.classList.add('reg-form-input');
      await renderEmailForm.setAttribute('id',"IdEmail");
      await renderEmailForm.setAttribute('type',"email");
      await renderEmailForm.setAttribute('name',"UserEmail");
    }


    {
        await renderFormInnerBlock3.appendChild(PINLabel);
        await PINLabel.classList.add('reg-form-label');
        await PINLabel.setAttribute('for',"IdPIN");
        await (PINLabel.textContent = "Create Password");
  
        await renderFormInnerBlock3.appendChild(renderPINForm);
        await renderPINForm.classList.add('reg-form-input');
        await renderPINForm.setAttribute('id',"IdPIN");
        await renderPINForm.setAttribute('type',"password");
        await renderPINForm.setAttribute('name',"UserPIN");
      }


      {
        await renderRegMainBlock.appendChild(renderUserBtn);
        await renderUserBtn.classList.add('reg-sub-btn');
        await renderUserBtn.appendChild(renderUserBtnText);
        await renderUserBtnText.classList.add('reg-btn-text');
        await (renderUserBtnText.textContent = "Create");
      }



     {
        await renderRegMainBlock.appendChild(renderUserLogText);
        await renderUserLogText.classList.add('reg-login-text');
        await renderUserLogText.setAttribute('href',"#");
        await (renderUserLogText.textContent = "Already have an account? Login");
     }
};



let renderRegVault = [renderRegLayoutBackground];


export {renderRegVault};