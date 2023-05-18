import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {logedUser, LoginReq} from "../interfaces/LoginReq";
import {Observable} from "rxjs";
import {RegisterReq} from "../interfaces/RegisterReq";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = "http://localhost:8080/api/auth"

  private _httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  login(loginReq: LoginReq):  Observable<logedUser>{
    return this.http.post<logedUser>(`${this.url}/login`, loginReq);
  }

  public getIsLoggedIn(): boolean {
    return (localStorage.getItem("accessToken") != null);
  }

  logOut(): void {
    localStorage.removeItem("accessToken");
    // localStorage.removeItem("username");
  }

  register(registerReq: RegisterReq): Observable<HttpResponse<any>> {
    return this.http.post(`${this.url}/register`, registerReq, {observe: "response"});
  }

  getToken(): string | null {
    if (this.getIsLoggedIn()) {
      return localStorage.getItem("accessToken");
    }
    return null;
  }

  private addAuthorizationHeader(): void {
    const token = localStorage.getItem("accessToken");
    if (token) {
      this._httpOptions.headers = this._httpOptions.headers.set('Authorization', `Bearer ${token}`);
    }
  }

  get httpOptions(): { headers: HttpHeaders} {
    this.addAuthorizationHeader();
    return this._httpOptions;
  }

  setUsernameAndTokenIntoLocalStorage(username: string, accessToken: string) {
    // localStorage.setItem("username", username);
    localStorage.setItem("accessToken", accessToken);
  }


}
