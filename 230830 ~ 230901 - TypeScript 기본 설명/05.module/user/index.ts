import UserService from "./service/user.service";
import Strategy from "./strategy/strategy";
import { GoogleAuthenticator } from "./strategy/google.strategy";
import { KakaoAuthenticator } from "./strategy/kakao.strategy";
import { EmailAuthenticator } from "./strategy/email.stratgy";
import UserController from "./user.controller";

// 전략 패턴 객체 생성
const strategy = new Strategy();
// 이렇게 불러오면 {strategy : {}, set(), login()} 이 상태로 불러와진다.

strategy.set('email',new EmailAuthenticator());
// 이렇게 불러오면 {strategy : {EmailAuthenticator{authenticate}}, set(), login()} 이 상태로 불러와진다.

strategy.set('kakao',new KakaoAuthenticator());
// 이렇게 불러오면 {strategy : {EmailAuthenticator{authenticate}, KakaoAuthenticator{authenticate}}, set(), login()} 이 상태로 불러와진다.

strategy.set('google',new GoogleAuthenticator());
// 이렇게 불러오면 {strategy : {EmailAuthenticator{authenticate}, KakaoAuthenticator{authenticate}, GoogleAuthenticator{authenticate}}, set(), login()} 이 상태로 불러와진다.

// 완성된 객체를 유저 서비스클래스 생성자의 매개변수로 전달 및 유저 서비스 객체 생성
const userService = new UserService(strategy);

// 유저 로그인 로직 클래스 생성 및 유저 서비스 로직 객체 생성자 매개변수로 전달
const userController = new UserController(userService);

userController.signin('email');