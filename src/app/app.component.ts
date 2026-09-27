import { Component } from '@angular/core';
import { StoreComponent } from './firebase-store/store/store/StoreComponent';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  links = ['fireStroge', 'fireAuth'];
  open = false;
  log() {
    this.open = !this.open;
  }
}
