// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared
import { SharedSpies } from '@svportal/shared/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { BaseOverviewModule } from '@svportal/shared/modules';

// Self
import { DragoncraftOverviewComponent } from './dragoncraft-overview.component';

describe('DragoncraftOverviewComponent', () => {
  let component: DragoncraftOverviewComponent;
  let fixture: ComponentFixture<DragoncraftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        BaseOverviewModule,
      ],
      declarations: [DragoncraftOverviewComponent],
      providers: [
        {
          provide: CardsApiService,
          useValue: SharedSpies.createCardApiServiceSpy(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragoncraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
