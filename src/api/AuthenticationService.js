import axios from 'axios'

class AuthenticationService {

    // send username, password to the SERVER
    executeJwtAuthenticationService(username, password) {
        return axios.post('/api/authenticate', {
            username,
            password
        })
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.get('http://localhost:8080/api/hello');        
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("JWT 토큰 발급 완료!!")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    /**
     * @description axios는 promise라는 객체를 쉽게 만들기 위해서 만들어진 라이브러리이다. 즉, axios를 통해서 promise 객체를 만들어 서버로 요청을 보내게 된다. promise 객체는 다음과 같이 만들 수 있다. * @code axios.get("http://localhost:8000")
     * @description 해당 코드는 axios를 이용해서 GET 메서드로 django 서버로 조회 요청을 보내는 promise 객체를 만든것이다. 그리고 만약 성공적으로 보내졌다면 다음의 코드처럼 promise의 .then() 메서드로 성공시 메시지("200 OK!")를 콘솔에 찍어줄 수 있다.
     * @code axios.get("http://localhost:8000").then(res => { console.log("200 OK!")})
     * @code axios.interceptors.request.use(config => {}, error => {})
     * @description interceptors 는 단어 그대로 가로채기 입니다. axios를 통해서 서버에 요청할 때에 그 요청을 가로채서 헤더에 값을 넣는 등의 조작이 가능합니다. 저희는 서버에 요청을 할 때 본인을 인증하기 위해서 회원 가입시에 발급받은 jwt 토큰을 request 헤더에 추가해서 서버로 보냅니다. 그러면 서버는 request의 헤더를 확인하고 유효한 jwt인지 판별한 다음 사용자를 인증합니다. 이 과정을 거쳐야만 요청에 알맞는 데이터를 실어서 response를 보내줍니다.
     * @param config 요청 바로 직전에 수행할 로직을 작성합니다. 이 때 config 변수는 AxiosRequestConfig 인터페이스를 담고 있습니다. 이 인터페이스가 갖는 여러가지 속성중에 headers 속성을 이용해서 헤더에 접근할 수 있습니다.
     * @param error 요청에 실패하면 수행할 로직을 작성합니다.
     */
    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }
}

export default new AuthenticationService()