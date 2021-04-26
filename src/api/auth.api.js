import AuthenticationService from "./AuthenticationService"

export const loginClicked = ({username, password}) => {
    AuthenticationService
        .executeJwtAuthenticationService(username, password)
        .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(username,response.data.token)
    })
    // .catch( () =>{
    //     this.setState({showSuccessMessage:false})
    //     this.setState({hasLoginFailed:true})
    // })
}
