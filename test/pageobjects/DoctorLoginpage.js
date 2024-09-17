class DoctorLoginpage
{
    get Dusername(){return $("[name='username']")}
    get Dpassword(){ return $("[name='password']")}
    get DLoginbutton(){return $("[name='submit']")}

   async adminLogin(username,password)
   {
    this.Dusername.setValue(username)
    this.Dpassword.setValue(password)
    this.DLoginbutton.click()

   }

}
export default new DoctorLoginpage()