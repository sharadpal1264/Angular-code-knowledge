import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../service/profile.service";
import { User } from "../model/user";
import { Observable } from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private profileService: ProfileService) { }
  User$: Observable<User>;
  ngOnInit(){
    //console.log(this.profileService.getUserProfile());
    this.profileService.getUserProfile().subscribe(d=>{
      console.log(d);
    }); 
  }
}
