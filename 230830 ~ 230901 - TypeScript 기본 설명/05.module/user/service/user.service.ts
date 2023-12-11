import { UserParams } from "../interface/login.request";
import { AuthenticatonResponse } from "../strategy/Authenticator";
import Strategy from "../strategy/strategy";

// 유저의 서비스 로직 클래스 정의
class UserService {
    // 전략패턴 유저 로그인 서비스 로직 객체
    // 이메일, 카카오, 구글 세 가지 로그인 로직 사용
    constructor(private readonly strategy : Strategy){}

    async login(type : string, credentials : UserParams) : Promise<AuthenticatonResponse>{
        const result = await this.strategy.login(type, credentials)
        return result;
    }
}

export default UserService;