// module.exports = {

//     before: function(browser) {
//         browser.url('https://github.com/login')
//         .windowMaximize()
//         .waitForElementVisible("#login_field")
//         .setValue("#login_field", "")
//         .pause(1000)
//         .setValue("#password", "")
//         .click("#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block.js-sign-in-button")
//         .keys(browser.Keys.ENTER)
//       },
//     Keys : {
//         ENTER :'\ue007'
//     },
//     'Demo Test for Google' : function (browser){

//         browser.url('https://gist.github.com/')
//         .waitForElementVisible("#gists > input")
//         .setValue("#gists > input", "Testing Gists")
//         .setValue("#gists > div.js-gist-file > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename", "Gist Name")
//         .setValue("#code-editor", "File Contents")
//         .click("#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > button")
//         .waitForElementVisible("#gists > div:nth-child(4) > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename")
//         .setValue("#gists > div:nth-child(4) > file-attachment > blob-editor > div.file-header.d-flex.flex-items-center.pr-0 > div.input-group.gist-filename-input > input.form-control.js-gist-filename.js-blob-filename", "Gist Name 2")
//         .setValue( 'xpath', "/html/body/div[5]/div/main/div[2]/div/form/div/div[1]/div[3]/file-attachment/blob-editor/div[2]/div/div/div[5]/div[1]/div/div/div/div[5]", "File Contents 2") 
//         .click("#new_gist > div > div.d-flex.flex-items-center.flex-justify-between > div > button")
//         .pause(10000)        
//     }
// };