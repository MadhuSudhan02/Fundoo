import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../typeInterface';
import { Iregistration } from '../typeInterface';
import { IForgot , IReset , note } from '../typeInterface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'http://fundoonotes.incubation.bridgelabz.com/api/';

  constructor(private httpclient: HttpClient) {}
  //CRUD
  PostService(
    Url: string,
    requestData: ILogin | Iregistration | IForgot| IReset | note  ,
    token: boolean = false,
    headerOption: any
  ) {
    console.log('data in http ', requestData);
    return this.httpclient.post(
      this.baseUrl + Url,
      requestData,
      token && headerOption
    );
  }
  GetService( Url: string,
    token: boolean = true,
    headerOption: any) {
      console.log('data in http ');
      return this.httpclient.get(
        this.baseUrl + Url,
        token && headerOption
      );

  }

  DeleteService() {}
  PutService() {}
}
