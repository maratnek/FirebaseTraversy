import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  title;
  owner;
  city;
  bedrooms;
  price;
  image;
  type;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      // console.log(listing);
      this.title = listing.title ;
      this.owner = listing.owner ;
      this.city = listing.city ;
      this.bedrooms = listing.bedrooms ;
      this.price = listing.price ;
      this.image = listing.image ;
      this.type = listing.type ;
    })
  }

  onEditSubmit(){
    let listing = {
      title : this.title ,
      owner : this.owner ,
      city : this.city ,
      bedrooms : this.bedrooms ,
      price : this.price ,
      // image : this.image ,
      type : this.type
    }

    this.firebaseService.updateListing(this.id, listing);
    this.router.navigate(['listings']);
  }

}
