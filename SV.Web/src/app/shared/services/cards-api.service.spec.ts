// Angular
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

// Third party
import { of } from 'rxjs';

// Self
import {
  CardDetailResponse,
  CardPostRequest,
  CardPutRequest,
  CardResponse,
  CardSearchRequest,
} from '../types/api';
import { CardType } from '../types/customs/card-type.enum';
import { Craft } from '../types/customs/craft.enum';
import { EvoSpecs } from '../types/customs/evo-specs';
import { Rarity } from '../types/customs/rarity.enum';
import { SharedSpies } from './../testing/shared-spies.spec';
import { CardsApiService } from './cards-api.service';

describe('CardsApiService', () => {
  let service: CardsApiService;
  let http: jasmine.SpyObj<HttpClient>;

  const cardId: string = '586a2bf2-34c2-43b3-93ba-fb1e1772de08';
  const cardsUrlSegment: string = '/api/cards';

  const mockCardResponse: CardResponse = {
    artLocation: 'https://svgdb.me/assets/cards/en/C_121134010.png',
    craft: Craft.forestcraft,
    id: cardId,
    name: 'Heroic Resolve',
    rarity: Rarity.gold,
    type: CardType.spell,
  };

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

  it('should search cards', () => {
    // ARRANGE
    const expectedRequest: CardSearchRequest = {
      name: mockCardResponse.name,
    } as CardSearchRequest;
    let expectedResponse: CardResponse[] = null;
    http.get.and.returnValue(of([mockCardResponse]));

    // ACT
    service
      .searchCards(expectedRequest)
      .subscribe((response: CardResponse[]) => {
        expectedResponse = response;
      });

    // ASSERT
    expect(expectedResponse).not.toBe(null);
    expect(expectedResponse.length).toBe(1);
    expect(expectedResponse[0].name).toBe(expectedRequest.name);
    expect(http.get).toHaveBeenCalledWith(
      `${cardsUrlSegment}?name=${expectedRequest.name}`
    );
  });

  it('should get card by id', () => {
    // ARRANGE
    let expectedResponse: CardDetailResponse = null;
    http.get.and.returnValue(of({ id: cardId } as CardDetailResponse));

    // ACT
    service.getCard(cardId).subscribe((response: CardDetailResponse) => {
      expectedResponse = response;
    });

    // ASSERT
    expect(expectedResponse).not.toBe(null);
    expect(expectedResponse.id).toBe(cardId);
    expect(http.get).toHaveBeenCalledWith(`${cardsUrlSegment}/${cardId}`);
  });

  it('should post card', () => {
    // ARRANGE
    const expectedRequest: CardPostRequest = {
      name: mockCardResponse.name,
      craft: mockCardResponse.craft,
      rarity: mockCardResponse.rarity,
      type: mockCardResponse.type,
      baseEvo: {
        artLocation: mockCardResponse.artLocation,
      } as EvoSpecs,
    } as CardPostRequest;
    let expectedResponse: CardResponse = null;
    http.post.and.returnValue(of(mockCardResponse));

    // ACT
    service.postCard(expectedRequest).subscribe((response: CardResponse) => {
      expectedResponse = response;
    });

    // ASSERT
    expect(expectedResponse).not.toBe(null);
    expect(expectedResponse.id).toBeTruthy();
    expectEqual(expectedResponse, expectedRequest);
    expect(http.post).toHaveBeenCalledWith(cardsUrlSegment, expectedRequest);
  });

  it('should put card', () => {
    // ARRANGE
    const expectedRequest: CardPutRequest = {
      name: mockCardResponse.name,
      baseEvo: {
        artLocation: mockCardResponse.artLocation,
      } as EvoSpecs,
    } as CardPutRequest;
    let expectedResponse: CardResponse = null;
    http.put.and.returnValue(of(mockCardResponse));

    // ACT
    service
      .putCard(cardId, expectedRequest)
      .subscribe((response: CardResponse) => {
        expectedResponse = response;
      });

    // ASSERT
    expect(expectedResponse).not.toBe(null);
    expect(expectedResponse.id).toBe(cardId);
    expect(expectedResponse.artLocation).toBe(
      expectedRequest.baseEvo.artLocation
    );
    expect(http.put).toHaveBeenCalledWith(
      `${cardsUrlSegment}/${cardId}`,
      expectedRequest
    );
  });

  it('should delete card', () => {
    // ARRANGE
    http.delete.and.returnValue(of());

    // ACT
    service.deleteCard(cardId).subscribe();

    // ASSERT
    expect(http.delete).toHaveBeenCalledWith(`${cardsUrlSegment}/${cardId}`);
  });
});

function expectEqual(
  expectedResponse: CardResponse,
  expectedRequest: CardPostRequest
) {
  expect(expectedResponse.name).toBe(expectedRequest.name);
  expect(expectedResponse.craft).toBe(expectedRequest.craft);
  expect(expectedResponse.rarity).toBe(expectedRequest.rarity);
  expect(expectedResponse.type).toBe(expectedRequest.type);
  expect(expectedResponse.artLocation).toBe(
    expectedRequest.baseEvo.artLocation
  );
}
