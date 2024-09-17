class AdminLogin {
    get adminusername() {
        return $("[name='username']")

    }
    get adminpassword() {
        return $("[name='password']")

    }
    get adminLoginbutton() {
        return $("button*=Login")
    }


    async Login(name, password) {
        await this.adminusername.setValue(name)
        await this.adminpassword.setValue(password)
        await this.adminLoginbutton.click()
    }

}
export default new AdminLogin()