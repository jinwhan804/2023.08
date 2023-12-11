import {UserParams} from './interface/login.request'
import UserService from './service/user.service'

// 사용자 서비스 로직 클래스 정의
class UserController {
    constructor(private readonly userService : UserService){

    }

    // /login/:type의 경로로 요청이 들어왔을 때 실행할 함수
    signin(type : string){
        // req.body로 추후 유저 정보 받을 예정

        // 임시 객체
        const loginParams : UserParams = {
            email : 'jinwhan804@hanmail.net',
            password : '123'
        }
        this.userService.login(type, loginParams);
    }

    // 회원 가입
    signup(){
        // 회원 가입 로직
    }
}

export default UserController;