import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css',
})
export class LogComponent {
  constructor(
    private serve: AuthService,
    private route: Router,
  ) {}

  loading = true;

  UserLogin = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  get Email() {
    return this.UserLogin.get('Email');
  }
  get Password() {
    return this.UserLogin.get('Password');
  }
  onSubmit() {
    if (this.UserLogin.invalid) {
      return;
    }
  }

  /* get value from input */
  InputEmail!: string;
  InputPassword!: string;

  getEmailValue(email: string) {
    this.InputEmail = email;
  }
  getPasswordValue(password: string) {
    this.InputPassword = password;
  }

  /* login */
  login() {
    this.loading = false;
    this.serve
      .Login(this.InputEmail, this.InputPassword)
      .then((com) => {
        console.log(com);
        alert('Login was successfully.');
        this.route.navigate(['./account']);
        this.loading = true;
      })
      .catch((error) => {
        alert(error.message);
        this.loading = true;
        this.UserLogin.reset();
      });
  }
}
