import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Listing } from "../model/listing";

@Injectable({
  providedIn: "root"
})
export class ListingService {
  private ROOT_URL = "http://localhost:4000/auth";

  // Http Options
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token", localStorage.getItem("token"))
  };

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.ROOT_URL}/allContents`, this.httpOptions);
  }

  addListing(listing) {
    //console.log("calling from service" + listing);
    return this.http.post<any>(`${this.ROOT_URL}/addContent`, listing, this.httpOptions);
  }

  addCategory(category){
    console.log("calling from service" + category);
    return this.http.post<any>(`${this.ROOT_URL}/addCategory`, category, this.httpOptions);
  }

  getCategoriesList(){
    return this.http.get<Listing[]>(`${this.ROOT_URL}/allCategory`, this.httpOptions);
  }
}
