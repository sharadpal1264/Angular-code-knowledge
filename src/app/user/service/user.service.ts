import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private ROOT_URL = "http://localhost:4000/local";
  private GOOGLE_ROOT_URL = "http://localhost:4000/google";

  constructor(private http: HttpClient, private router: Router) {}

  googleregister(){
    return this.http.get<any>(`${this.GOOGLE_ROOT_URL}`);
  }

  login(user) {
    return this.http.post<any>(`${this.ROOT_URL}/login`, user);
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(["/user"]);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  register(user) {
    return this.http.post<any>(`${this.ROOT_URL}/register`, user);
  }

  authLogout(expirationTime: number) {
  if(this.loggedIn){
      setTimeout(() => {
        this.logOut();
      },expirationTime);
    }
  }
}
