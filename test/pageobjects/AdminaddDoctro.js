class Adminadddoctor
{
    get ADocsplDD(){ return $("[name='Doctorspecialization']")}
    get ADocnametxt(){ return $("[name='docname']")}
    get ADocclinicaddresstxt(){ return $("[name='clinicaddress']")}
    get ADocfeestxt(){ return $("[name='docfees']")}
    get ADoccontnotxt(){ return $("[name='doccontact']")}
    get AdocEmailtxt(){ return $("[name='docemail']")}
    get ADocpasswtxt(){ return $("[name='npass']")}
    get ADocCpaswtxt(){return $("[name='cfpass']")}
    get ADocsubmitbtn(){return $("[name='submit']")}

    async adddoctor(Dspl,Dname,DCadd,Dfees,Dcno,Demail,Dpass,Dcpass)
    {
        await this.ADocsplDD.setValue(Dspl)
        await this.ADocnametxt.setValue(Dname)
        await this.ADocclinicaddresstxt.setValue(DCadd)
        await this.ADocfeestxt.setValue(Dfees)
        await this.ADoccontnotxt.setValue(Dcno)
        await this.AdocEmailtxt.setValue(Demail)
        await this.ADocpasswtxt.setValue(Dpass)
        await this.ADocCpaswtxt.setValue(Dcpass)

    }
}