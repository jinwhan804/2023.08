import { UserParams } from "../interface/login.request"

// 응답 정보 객체의 구조 정의
export interface AuthenticatonResponse {
    success : boolean
    message? : string
}

// 검증 객체 구조 정의
export interface Authenticator {
    // 로그인 검증을 할 삼수 선언
    authentcate(credentials : UserParams) : Promise<AuthenticatonResponse>
}