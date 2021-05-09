import { Component, OnInit } from "@angular/core";
import { ListingService } from "../service/listing.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CategoryList } from "../model/categoriesList";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-listing",
  templateUrl: "./add-listing.component.html",
  styleUrls: ["./add-listing.component.scss"]
})
export class AddListingComponent implements OnInit {

  listingForm = new FormGroup({
    CategoryName: new FormControl("", [Validators.required]),
    ContentDetails: new FormControl("", [Validators.required])
  });

  constructor(private listingService: ListingService, private router: Router) {}
  Categories$: Observable<CategoryList[]>;
  ngOnInit() {
       this.Categories$ = this.listingService.getCategoriesList();
  }

  url="https://bootdey.com/img/Content/avatar/avatar7.png";

  selectFile(e){
    if(e.target.files){
      console.log(e.target.files);
      var reader= new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

  newListing() {
    if (this.listingForm.valid) {
      this.listingService.addListing(this.listingForm.value).subscribe(res => {
        this.listingForm.reset();
        this.router.navigate(["/listings"]);
      });
    }
  }
}
