const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

require('dotenv').config(); 

const pageObj = client.page.addCollaborator();

Given('I am Logged In', () => {
    
    const browser = client.page.login()
    .navigate()
    .waitForElementVisible("@login")
    .setValue("@login", process.env.uName)
    .setValue("@password", process.env.passcode)
    .click("@loginBtn")
});

When('I open my existing Organization', () => {

    return pageObj
      .navigate()
      .maximizeWindow()
      .waitForElementVisible('@inviteBtn', 6000);
});

When('I click on Invite Someone', () => {

    return pageObj
      .click('@inviteBtn')
      .pause(5000)
});

When('I add the {string} to be invited', (string) => {

  return pageObj
   
      .waitForElementPresent('@inviteKey', 5000)
      .setValue('@inviteKey', string)
});


When('I select the name from the options', () => {

  return pageObj

  .isVisible('@resultUser', res => {

    if(res.value === true) {

      pageObj
      .click("@resultUser");

    }
   })  
});

When('I click on Invite Button', () => {

   return pageObj
  .isVisible('@inviteBtn2', res => {

    if(res.value === true) {

      pageObj
      .click("@inviteBtn2");

    }
   })  
    
});

When('I choose {string} of the new invitation', (string) => {

  return pageObj
  .isVisible(string, res => {

    if(res.value === true) {

      pageObj
      .click(string);

    }
   })  
});

When('I click on Send Invitation', () => {

  return pageObj
  .isVisible('@sendInvitationBtn', res => {

    if(res.value === true) {

      pageObj
      .click("@sendInvitationBtn");

    }
    else console.log("User not found");
   })  
});
