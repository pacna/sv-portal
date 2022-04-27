import { Component, OnInit } from '@angular/core';
import { SVNavigationMenu } from '../../types/customs/sv-navigation-menu';
import { MENU } from '../../constants/menu';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  navLinks: SVNavigationMenu[] = MENU;
  constructor() {}

  ngOnInit(): void {}
}
