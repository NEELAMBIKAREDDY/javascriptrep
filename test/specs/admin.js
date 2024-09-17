import AdminLogin from "../pageobjects/AdminLoginpage.js"
import appHomepage from "../pageobjects/appHomepage.js"
import Loginpage from "../pageobjects/Loginpage.js"
import fs from "fs"
let data=fs.readFileSync("./test/testcredentials/credentials.json")
let cred=JSON.parse(data)
let u=cred.username
let p=cred.password

describe(("system case between specializationand add doctor"),()=>{
    it((""),async()=>
{
    await browser.url(cred.url)
   await appHomepage.Loginlnk.click()
   await Loginpage.adminLoginLnk.click()
  await browser.pause(3000)
 //console.log( await browser.geturl)
let parent=await browser.getWindowHandle()
console.log(`parent:${parent}`)
let all=await browser.getWindowHandles()
console.log(`all:${all}`)
// for (let i = 0; i < all.length; i++) {
//     if(all[i]!=parent)
//     {
//       await browser.switchToWindow[all[i]]
//         await AdminLogin.Login(u,p)

//     }
   
    
//}
 await browser.switchWindow("Admin-Login")
 await browser.pause(2000)
 //console.log(`url:${browser.getUrl()}`);
 
 await AdminLogin.Login(u,p)

   
//   let username=await browser.$("//input[@name='username']")
//  username.setValue("swati")
  //await AdminLoginpage.adminusername.moveTo()

// let flag=await AdminLogin.adminusername.isDisplayed()
// await console.log(flag);
//await browser.pause(3000)



    })
})