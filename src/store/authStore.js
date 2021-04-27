import { action, computed, observable } from 'mobx';
import { login } from "../api/auth.api";

class authStore{

    @observable
    userData = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        token: '',
    }

    @computed
    set userData(form) {
        this.userData.username = form.username;
        this.userData.email = form.email;
        this.userData.password = form.password;
        this.isLoggedIn = true; // 회원가입시 자동으로 로그인되게 한다.
    }

    @action
    async login(signUpForm) {
        await login(signUpForm);
    }
    
}
export default authStore;