// Angular
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

// Self
import { CardsApiService } from '../services';

// https://stackoverflow.com/questions/63578246/why-should-we-use-jasmine-spy-object-in-angular-unit-testing
export class SharedSpies {
  static createCardApiServiceSpy(): jasmine.SpyObj<CardsApiService> {
    return jasmine.createSpyObj<CardsApiService>('CardsApiService', [
      'searchCards',
      'getCard',
      'postCard',
      'deleteCard',
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

  static createMatDialogRefSpy<T>(): jasmine.SpyObj<MatDialogRef<T>> {
    return jasmine.createSpyObj<MatDialogRef<T>>('MatDialogRef', ['close']);
  }
}
