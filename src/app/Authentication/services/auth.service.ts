import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}
  User = this.auth.currentUser;

  /* ----- Sign UP Page ----- */

  /* Google SignUp */
  googleAuth = new GoogleAuthProvider();
  async signWithGoogle() {
    const result = await signInWithPopup(this.auth, this.googleAuth);
    /* console.log(result.user); */
  }
  async SignUp(Name: string, email: string, password: string) {
    const result = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password,
    );

    /* Add Name */
    await updateProfile(result.user, {
      displayName: Name,
    });
    /* const User = this.auth.currentUser; */
  }

  /* ----- Login IN Page ----- */

  async Login(email: string, password: string) {
    const result = await signInWithEmailAndPassword(this.auth, email, password);
    console.log(result.user);
  }

  /* ----- Login Out  ----- */
  async logout() {
    const result = await signOut(this.auth);
    console.log('currentUser:', this.auth.currentUser);
  }
}
