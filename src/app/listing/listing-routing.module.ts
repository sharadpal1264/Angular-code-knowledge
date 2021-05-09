import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllListingComponent } from "./all-listing/all-listing.component";
import { AddListingComponent } from "./add-listing/add-listing.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { AuthGuard } from "../user/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AllListingComponent
  },
  {
    path: "add-listing",
    component: AddListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-Category",
    component: AddCategoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule {}
