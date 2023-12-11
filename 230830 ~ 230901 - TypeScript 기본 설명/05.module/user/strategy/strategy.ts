import {UserParams} from '../interface/login.request'
import {AuthenticatonResponse, Authenticator} from './Authenticator'

// 전략 패턴 객체 구조 정의 
interface IStrategy {
    // key 문자열로 지정
    [ket : string] : Authenticator
}

// 서비스 로직들을 가질 객체 구조 정의
class Strategy{
    private strategy : IStrategy = {}
    public set(key : string, authentcate : Authenticator){
        // key 값을 받고 서비스 로직 추가
        this.strategy[key] = authentcate;
    }

    public async login(type : string, credentials : UserParams) : Promise<AuthenticatonResponse>{
        const result = await this.strategy[type].authentcate(credentials);
        return result;
    }
}

export default Strategy;