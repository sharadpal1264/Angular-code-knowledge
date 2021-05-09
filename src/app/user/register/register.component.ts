import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  userRegister() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe(res => {
        localStorage.setItem("token", res.token);
        this.registerForm.reset();
        this.router.navigate(["user/profile"]);
        this.userService.authLogout(1000*60*5);
      });
    }
  }

  //not working as of now
  userGoogleRegister() {
    this.userService.googleregister().subscribe(res=>{
      console.log(res);
    });  
  }
}