// 로그인 가입 작업
import {Strategy} from './auth'

export interface AuthProps{
    email : string
    password : string
}

interface AuthenticatonResponse{
    success : boolean
    message? : string
}

interface Authenticator {
    // 검증에 대한 요청 처리
    authenticate(credentials : AuthProps): Promise<AuthenticatonResponse>
}

// 이메일 로그인 로직 클래스
export class EmailAuthcenticator implements Authenticator{
    async authenticate(credentials : AuthProps) : Promise<AuthenticatonResponse>{
        // 요청과 응답 코드가 들어가는 부분
        console.log('email 로그인');
        return {success : true}
    }
}

// 카카오 로그인 로직 클래스
export class Kakaoauthenticator implements Authenticator{
    async authenticate(credentials: AuthProps): Promise<AuthenticatonResponse> {
        // 요청과 응답 코드가 들어가는 부분
        console.log('kakao 로그인');
        return {success : true}
    }
}

// 로그인에 대한 서비스를 처리할 클래스 구조
export interface LoginService {
    // 로그인 로직에 대한 함수 구조
    login(type : string, credentials : AuthProps) : Promise<AuthenticatonResponse>
}

// 로그인 클래스에 로그인 서비스 구조를 상속 받는다.
export class Login implements LoginService{
    constructor(private readonly strategy : Strategy){}
    async login(type: 'email' | 'kakao', credentials: AuthProps): Promise<AuthenticatonResponse> {
        // strategy : 로그인 로직이 들어있는 객체
        // 어떤 로그인 로직으로 처리할지 type으로 구분해서 정리
        const result = await this.strategy[type].authenticate(credentials)
        return result;
    }
}