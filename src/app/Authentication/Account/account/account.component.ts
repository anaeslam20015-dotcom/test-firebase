import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  constructor(
    private auth: Auth,
    private serve: AuthService,
    private rout: Router,
  ) {}
  user = this.auth.currentUser;
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      console.log(this.user?.displayName);
      console.log(this.user?.email);
    });
  }
  logout() {
    this.serve.logout().then(() => {
      this.rout.navigate(['./fireAuth']);
    });
  }
}
