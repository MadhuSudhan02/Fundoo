import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';
import { IForgot, ILogin , Iregistration, IReset } from '../typeInterface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token :any ;
  constructor(private httpService: HttpService) {
  this.token = localStorage.getItem('token') ;

  }


  LoginService(data: ILogin) {
    let requestHeaderOption = {
      headers : new HttpHeaders ({
        "content-type" : 'application/json' ,
        "authorization" : this.token ,
      })
    }


    console.log('payload in Userservice', data);
    return this.httpService.PostService('user/Login', data, false, requestHeaderOption);
  }

registration(requestData: Iregistration){
    let requestHeadersOptions = {
      headers:new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }
    console.log("Payload in user service", requestData)
    return this.httpService.PostService('user/userSignup', requestData, false, requestHeadersOptions)
  }

  forgotPassword(requestData:IForgot) {
    let requestHeadersOptions = {
      headers:new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }
    console.log("Payload in user service", requestData)
    return this.httpService.PostService('user/reset', requestData, false, requestHeadersOptions)


  }

  resetPassword(requestData : IReset) {
    let requestHeadersOptions = {
      headers:new HttpHeaders({
        "Content-Type": 'application/json',
        "authorization": this.token
      })
    }
    console.log("Payload in user service", requestData)
    return this.httpService.PostService('user/reset-password', requestData, false, requestHeadersOptions)

  }
}