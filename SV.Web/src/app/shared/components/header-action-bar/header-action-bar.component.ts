// Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'header-action-bar',
  templateUrl: './header-action-bar.component.html',
  styleUrls: ['./header-action-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
})
export class HeaderActionBarComponent {}
