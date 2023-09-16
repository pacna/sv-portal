// Angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Material
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class NotFoundComponent {
  constructor(private readonly router: Router) {}

  goToForestcraftPage(): void {
    this.router.navigate(['forestcraft']);
  }
}
