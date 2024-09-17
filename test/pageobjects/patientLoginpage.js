class PatientLoginPage
{
    get Pusername(){return $("[name='username']")}
    get Ppassword(){ return $("[name='password']")}
    get PLoginbutton(){return $("[name='submit']")}

   async adminLogin(username,password)
   {
    await this.Pusernameusername.setValue(username)
    this.Ppasswordpassword.setValue(password)
    this.PLoginbutton.click()

   }

}
export default new PatientLoginPage()