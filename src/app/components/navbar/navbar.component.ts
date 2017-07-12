import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user : Observable<firebase.User>;
  // provider: enum{ google, github };
  constructor(public af: AngularFireAuth) {
    this.user = af.authState;
  }

  ngOnInit() {
  }

  login(){
      this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      // this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  logout(){
    this.af.auth.signOut();
  }

}
