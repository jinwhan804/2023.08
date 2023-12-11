import {EmailAuthcenticator,Kakaoauthenticator,AuthProps,Login,LoginService} from './Authent'

interface IEmailSender {
    sendEmail(email : string) : void
}

class EmailSender implements IEmailSender{
    sendEmail(email: string): void {
        
    }
}

export interface Strategy {
    email : EmailAuthcenticator
    kakao : Kakaoauthenticator
}

class Auth {
    constructor(
        private readonly authProps : AuthProps, 
        private readonly emailSender : EmailSender, 
        private readonly loginService: LoginService
    ){
        this.authProps = authProps
    }

    // 로그인 로직 구조
    public async login(){
        console.log(this);
        await this.loginService.login('kakao', this.authProps)
    }

    // 이메일 인증 처리 구조
    public register() : void {
        this.emailSender.sendEmail(this.authProps.email)
    }
}

// 유저의 이메일과 비번 임시 객체
const authProps : AuthProps = {
    email : 'jinwhan804@hanmail.net',
    password : '1234'
}

const _emailSender = new EmailSender();

// email 로그인 로직 클래스 동적 할당
const _email = new EmailAuthcenticator();

// kakao 로그인 로직 클래스 동적 할당
const _kakao = new Kakaoauthenticator();

// 로그인 서비스 로직을 가지고 있는 객체
const _strategy : Strategy = {
    email : _email,
    kakao : _kakao
}

const _loginService = new Login(_strategy);
const auth = new Auth(authProps,_emailSender, _loginService);
auth.login();