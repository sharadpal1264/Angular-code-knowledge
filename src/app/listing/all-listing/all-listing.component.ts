import { Component, OnInit } from "@angular/core";
import { ListingService } from "../service/listing.service";
import { Observable } from "rxjs";
import { Listing } from "../model/listing";

@Component({
  selector: "app-all-listing",
  templateUrl: "./all-listing.component.html",
  styleUrls: ["./all-listing.component.scss"]
})
export class AllListingComponent implements OnInit {
  listings$: Observable<Listing[]>;

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.listings$ = this.listingService.getListings();
   
  }

  url="https://res.cloudinary.com/socialadda/image/upload/v1607884758/postImages/uvy44vxetexzgwxq7st0.jpg";
}
