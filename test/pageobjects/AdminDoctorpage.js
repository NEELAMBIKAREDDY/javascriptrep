class AdminDoctor{
    get Adoctorspllnk(){ return $( "//span[contains(text(),' Doctor Specialization ')]")}
    get AaddDoctrolnk() { return $("//span[text()='Add Doctor']")}
    get AmanageDoctorlnk(){return $("//span[contains(text()='Manage Doctors')]")}


}