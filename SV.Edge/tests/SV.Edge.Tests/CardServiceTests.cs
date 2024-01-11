using System.Collections.Generic;
using System.Threading.Tasks;
using SV.Edge.Controllers.Models;
using SV.Edge.Repositories;
using SV.Edge.Services;
using SV.Edge.Services.Constants;
using SV.Edge.Services.Models;
using Xunit;

namespace SV.Edge.Tests;

public class CardServiceTests
{
    private readonly ICardRepository _cardRepo;
    private readonly ICardService _svc;

    public CardServiceTests()
    {
        this._cardRepo = new CardInMemoryRepository();
        this._svc = new CardService(cardRepo: this._cardRepo);
    }

    [Fact]
    public async Task CanGetCardAsync()
    {
        // ARRANGE
        string cardId = "fe60ee56-bb98-4001-b783-b3e1dde98f67";

        // ACT
        CardDetailResponse card = await this._svc.GetCardAsync(id: cardId); 

        // ASSERT
        Assert.NotNull(card);
        Assert.Equal(cardId, card.Id);
    }

    [Fact]
    public async Task CanSearchCardsAsync()
    {
        // ARRANGE
        SearchCardRequest request = new SearchCardRequest
        {
            Craft = CraftType.Forestcraft
        };

        // ACT
        List<CardResponse> cards = await this._svc.SearchCardsAsync(request: request);

        // ASSERT
        Assert.NotNull(cards);
        Assert.Collection(cards,
            x => Assert.Equal(x.Craft, request.Craft),
            x => Assert.Equal(x.Craft, request.Craft)
        );
    }

    [Fact]
    public async Task CanAddCardAsync()
    {
        // ARRANGE
        AddCardRequest request = new AddCardRequest
        {
            Craft = CraftType.Runecraft,
            Name = "Insight",
            Pack = CardPackType.Basic,
            PPCost = 1,
            Rarity = RarityType.Bronze,
            Type = CardType.Spell,
            BaseEvo = new EvoSpecs
            {
                AbilityText = "Draw a card.",
                FlavorText = "Knowledge comes to the wise.",
                ArtLocation = "https://svgdb.me/assets/cards/en/C_100314010.png"
            }
        };

        // ACT
        CardResponse card = await this._svc.AddCardAsync(request: request);

        // ASSERT
        Assert.NotNull(card);
        AssertEqual(expectedRequest: request, actualResponse: card);
    }

    [Theory]
    [InlineData(true)] // fail because the request is empty
    [InlineData(false)] // fail because BaseEvo is null
    public async Task CanValidateAddCardAsync(bool shouldTestEmpty)
    {
        // ARRANGE
        AddCardRequest request = shouldTestEmpty ? new AddCardRequest() : new AddCardRequest
        {
            Craft = CraftType.Runecraft,
            Name = "Insight",
            Pack = CardPackType.Basic,
            PPCost = 1,
            Rarity = RarityType.Bronze,
            Type = CardType.Spell
        };

        // ACT/ASSERT
        await Assert.ThrowsAsync<HttpException>(() => this._svc.AddCardAsync(request: request));
    }

    [Theory]
    [InlineData("abc", true)]
    [InlineData("e6f3a146-ecf6-439b-9946-ed77ef01a4f8", false)]
    public async Task CanUpdateCardAsync(string cardId, bool shouldReturnNull)
    {
        // ARRANGE
        UpdateCardRequest request = new UpdateCardRequest
        {
            Name = "Heroic Resolve (edited)",
            PPCost = 2,
            AudioLocations = new List<string>(),
            BaseEvo = new EvoSpecs
            {
                AbilityText = "Blah",
                FlavorText = "Blah",
                ArtLocation = "somewhere far away",
            }
        };

        // ACT
        CardResponse card = await this._svc.UpdateCardAsync(id: cardId, request: request);

        // ASSERT
        if (shouldReturnNull)
        {
            Assert.Null(card);
        }
        else
        {
            Assert.NotNull(card);
            Assert.Equal(cardId, card.Id);
            Assert.Equal(request.Name, card.Name);
        }
    }

    [Theory]
    [InlineData(true)] // fail because the request is empty
    [InlineData(false)] // fail because BaseEvo is null
    public async Task CanValidateUpdateCardAsync(bool shouldTestEmpty)
    {
        // ARRANGE
        string id = "e6f3a146-ecf6-439b-9946-ed77ef01a4f8";
        UpdateCardRequest request = shouldTestEmpty ? new UpdateCardRequest() : new UpdateCardRequest
        {
            Name = "Insight",
            PPCost = 1,
            AudioLocations = new List<string>(),
        };

        // ACT/ASSERT
        await Assert.ThrowsAsync<HttpException>(() => this._svc.UpdateCardAsync(id: id, request: request));
    }

    [Fact]
    public async Task CanRemoveCardAsync()
    {
        // ARRANGE
        string cardId = "f52852a7-4845-4853-804d-a7122e70c77e";
        
        // ACT
        await this._svc.RemoveCardAsync(id: cardId);
        CardDetailResponse card = await this._svc.GetCardAsync(id: cardId);

        // ASSERT
        Assert.Null(card);
    }

    private void AssertEqual(AddCardRequest expectedRequest, CardResponse actualResponse)
    {
        Assert.Equal(expected: expectedRequest.Craft, actual: actualResponse.Craft);
        Assert.Equal(expected: expectedRequest.Name, actual: actualResponse.Name);
        Assert.Equal(expected: expectedRequest.BaseEvo.ArtLocation, actual: actualResponse.ArtLocation);
        Assert.Equal(expected: expectedRequest.Rarity, actual: actualResponse.Rarity);
        Assert.Equal(expected: expectedRequest.Type, actual: actualResponse.Type);
    }
}
