// Angular
import { Component, Input } from '@angular/core';

// Self
import { FollowerDescription } from './../../types/customs/follower-description';

@Component({
  selector: 'follower-detail-description',
  templateUrl: './follower-detail-description.component.html',
  styleUrls: ['./follower-detail-description.component.scss'],
})
export class FollowerDetailDescriptionComponent {
  @Input() followerHeaderText: string = 'Base';
  @Input() followerDescription: FollowerDescription;
}
