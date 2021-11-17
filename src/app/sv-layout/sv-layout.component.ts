import { MENU } from './menu';
import { SVNavigationMenu } from './types/sv-layout.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sv-layout',
  templateUrl: './sv-layout.component.html',
  styleUrls: ['./sv-layout.component.scss'],
})
export class SVLayoutComponent implements OnInit {
  navLinks: SVNavigationMenu[] = MENU;
  activeLink: SVNavigationMenu;

  constructor() {}

  ngOnInit(): void {
    this.activeLink = this.navLinks[0];
  }
}
