// Angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Shared
import { SharedSpies } from '@svportal/shared/testing';
import { CardsApiService } from '@svportal/shared/services/cards-api.service';
import { BaseOverviewModule } from '@svportal/shared/modules';

// Self
import { HavencraftOverviewComponent } from './havencraft-overview.component';

describe('HavencraftOverviewComponent', () => {
  let component: HavencraftOverviewComponent;
  let fixture: ComponentFixture<HavencraftOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        BaseOverviewModule,
      ],
      declarations: [HavencraftOverviewComponent],
      providers: [
        {
          provide: CardsApiService,
          useValue: SharedSpies.createCardApiServiceSpy(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HavencraftOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
