import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ListingService } from "../service/listing.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CategoryList } from "../model/categoriesList";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm = new FormGroup({
    CategoryName: new FormControl("", [Validators.required])
  });

  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit() {
  }

  
  newCategory() {
    if (this.categoryForm.valid) {
      this.listingService.addCategory(this.categoryForm.value).subscribe(res => {
        this.categoryForm.reset();
        this.router.navigate(["/listings/add-listing"]);
      });
    }
  }

}
