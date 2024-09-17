class Loginpage
{
    get adminLoginLnk(){return $("//h6[text()='Admin Login']/../a/button")}
    get doctorLoginLnk(){ return $("//h6[text()='Doctors login']/../a/button")}
    get patientLoginLnk(){ return $("//h6[text()='Patient Login']/../a/button")}

}
export default new Loginpage()