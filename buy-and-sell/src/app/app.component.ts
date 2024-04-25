import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public auth: AngularFireAuth,
  ){}

  signClicked(): void {
    this.auth.signInWithPopup(new GoogleAuthProvider);
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
