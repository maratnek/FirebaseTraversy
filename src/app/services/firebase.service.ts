import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    console.log('Service Firebase ...');
    this.listings = db.list('/listings');
  }

  getListings(){
    // this.listings = this.db.list('/li')
    return this.listings;
  }

  getListingDetails(id){
    // this.listings = this.db.list('/li')
    this.listing = this.db.object('/listings/' + id);
    return this.listing;
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
