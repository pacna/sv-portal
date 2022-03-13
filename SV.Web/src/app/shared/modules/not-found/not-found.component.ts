import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  goToForestcraftPage(): void {
    this.router.navigate(['forestcraft']);
  }
}
