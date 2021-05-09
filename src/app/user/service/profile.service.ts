import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private ROOT_URL = "http://localhost:4000/auth";

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token"))
  };

  constructor(private http: HttpClient) {}

  getUserProfile(){
    return this.http.get<User>(`${this.ROOT_URL}/UserData`, this.httpOptions);
  }
}










