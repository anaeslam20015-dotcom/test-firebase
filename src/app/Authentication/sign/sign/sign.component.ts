import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css',
})
export class SignComponent {
  constructor(
    private serve: AuthService,
    private route: Router,
  ) {}

  loading = true;

  UserSignup = new FormGroup({
    FullName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  get FullName() {
    return this.UserSignup.get('FullName');
  }
  get Email() {
    return this.UserSignup.get('Email');
  }
  get Password() {
    return this.UserSignup.get('Password');
  }
  onSubmit() {
    if (this.UserSignup.invalid) {
      return;
    }
  }

  /* Google SignUp */
  googleSign() {
    this.serve
      .signWithGoogle()
      .then(() => {
        alert('Sign Up was successfully.');
        this.route.navigate(['./log-in']);
      })
      .catch((error) => {
        alert(error.massage);
      });
  }

  /* Get value from input */
  InputaName!: string;
  InputEmail!: string;
  InputPassword!: string;

  getNameValue(name: string) {
    this.InputaName = name;
  }
  getEmailValue(email: string) {
    this.InputEmail = email;
  }
  getPasswordValue(password: string) {
    this.InputPassword = password;
  }

  /* Sign UP With Email and Pssword */

  signUp() {
    this.loading = false;
    console.log('Email:', this.InputEmail);
    console.log('Password:', this.InputPassword);
    this.serve
      .SignUp(this.InputaName, this.InputEmail, this.InputPassword)
      .then(() => {
        alert('Sign Up was successfully.');
        this.loading = true;
        this.UserSignup.reset();
        this.route.navigate(['/log-in']);
      })
      .catch((error) => {
        this.loading = true;
        console.log('Code:', error.code);
        console.log('Message:', error.message);
        alert(error.message);
      });
  }
}
