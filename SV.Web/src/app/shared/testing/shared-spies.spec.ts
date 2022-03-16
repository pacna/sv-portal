import { HttpClient } from '@angular/common/http';
import { CardsApiService } from '../services';

// https://stackoverflow.com/questions/63578246/why-should-we-use-jasmine-spy-object-in-angular-unit-testing
export class SharedSpies {
  static createCardApiServiceSpy(): jasmine.SpyObj<CardsApiService> {
    return jasmine.createSpyObj<CardsApiService>('CardsApiService', [
      'searchCards',
      'getCard',
    ]);
  }

  static createHttpClientSpy(): jasmine.SpyObj<HttpClient> {
    return jasmine.createSpyObj<HttpClient>('HttpClient', [
      'get',
      'post',
      'put',
      'delete',
    ]);
  }
}
