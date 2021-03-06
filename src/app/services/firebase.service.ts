  import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
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

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  addListing(listing){
    // create root Ref
    console.log('Add Listing');
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]])
    {
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }
  deleteListing(id){
      return this.listings.remove(id);
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
