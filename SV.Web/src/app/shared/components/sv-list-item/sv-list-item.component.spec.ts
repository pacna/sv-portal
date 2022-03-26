import { LightboxModule } from 'ng-gallery/lightbox';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardResponse } from '../../types/api/card-response';

import { SVListItemComponent } from './sv-list-item.component';

describe('SVListItemComponent', () => {
  let component: SVListItemComponent;
  let fixture: ComponentFixture<SVListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightboxModule],
      declarations: [SVListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SVListItemComponent);
    component = fixture.componentInstance;
    component.card = { artLocation: '', name: '' } as CardResponse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
