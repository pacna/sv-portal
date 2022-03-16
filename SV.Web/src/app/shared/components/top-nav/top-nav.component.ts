import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';
import { SVNavigationMenu } from './types';

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
