import {UserParams} from '../interface/login.request'
import {AuthenticatonResponse, Authenticator} from './Authenticator'

// 검증 객체 구조 상속
export class GoogleAuthenticator implements Authenticator {
    async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
        // 구글 로그인 로직 작성
        console.log('google 로그인 성공');
        return {success : true};
    }
}