import { Component, OnInit } from '@angular/core';
import { MENU } from 'src/app/shared/components/sv-layout/menu';
import { SVNavigationMenu } from 'src/app/shared/components/sv-layout/types';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  navLinks: SVNavigationMenu[] = MENU;
  constructor() {}

  ngOnInit(): void {}
}
