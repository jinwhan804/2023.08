import {UserParams} from '../interface/login.request'
import {AuthenticatonResponse, Authenticator} from './Authenticator'

// 검증 객체 구조 상속
export class EmailAuthenticator implements Authenticator {
    async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
        // 이메일 로그인 로직 작성
        console.log('email 로그인 성공');
        return {success : true};
    }
}