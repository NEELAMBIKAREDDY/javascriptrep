
describe("",()=>
{
    it((""),async () => {
        await browser.url("http://106.51.90.215/Build/Hospital_Doctor_Patient_Management_System/")
        await browser.$("(//button[contains(text(),'Click Here')])[3]").click()
        await browser.pause(3000)
        let w=await browser.getWindowHandles()
        console.log(w[0]);
        
        await browser.switchToWindow(w[1])
        
        console.log(await browser.getUrl());
        
        await browser.$("//input[@class='form-control']").waitForDisplayed()
        
        await browser.$('//input[@class="form-control"]').setValue("admin")
        await browser.pause(3000)
    })

    
})