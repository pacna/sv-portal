import { SharedSpies } from './../testing/shared-spies.spec';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CardsApiService } from './cards-api.service';

describe('CardsApiService', () => {
  let service: CardsApiService;
  let http: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: SharedSpies.createHttpClientSpy() },
      ],
    });
    service = TestBed.inject(CardsApiService);
    http = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
