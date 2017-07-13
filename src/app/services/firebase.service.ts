import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    console.log('Service Firebase ...');
    this.listings = db.list('/listings');
  }

  getListings(){
    // this.listings = this.db.list('/li')
    return this.listings;
  }

  getListingDetails(id){
    // this.listings = this.db.list('/li')
    console.log(this.listings);
    return this.listings;
  }

}

interface Listing {
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
