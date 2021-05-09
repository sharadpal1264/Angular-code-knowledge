import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListingRoutingModule } from "./listing-routing.module";
import { AllListingComponent } from "./all-listing/all-listing.component";
import { AddListingComponent } from "./add-listing/add-listing.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddCategoryComponent } from "./add-category/add-category.component";

@NgModule({
  declarations: [
    AllListingComponent,
    AddListingComponent,
    AddCategoryComponent
  ],
  imports: [CommonModule, ListingRoutingModule, ReactiveFormsModule]
})
export class ListingModule {}
