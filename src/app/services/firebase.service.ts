  import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;
  folder:any;

  constructor(private db: AngularFireDatabase) {
    console.log('Service Firebase ...');
    this.listings = db.list('/listings');
    this.folder = 'listingimages';
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

  addListing(listing){
    // create root Ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.path = path;
        listing.image = selectedFile.name;
        return this.listings.push(listing);
      });
    }
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
