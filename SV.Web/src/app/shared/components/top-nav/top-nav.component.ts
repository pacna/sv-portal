// Angular
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

// Self
import { SVNavigationMenu } from '../../types/customs/sv-navigation-menu';
import { MENU } from '../../constants/menu';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTabsModule, RouterModule],
})
export class TopNavComponent {
  navLinks: SVNavigationMenu[] = MENU;
}
