import { FollowerDescription } from './../../types/customs/follower-description';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'follower-detail-description',
  templateUrl: './follower-detail-description.component.html',
  styleUrls: ['./follower-detail-description.component.scss'],
})
export class FollowerDetailDescriptionComponent implements OnInit {
  @Input() followerHeaderText: string = 'Base';
  @Input() followerDescription: FollowerDescription;
  constructor() {}

  ngOnInit(): void {}
}
