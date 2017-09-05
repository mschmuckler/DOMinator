const randomNum = () => Math.floor(Math.random() * 1000);

const appendCard = (card) => {
  const deck = $l("deck-list");
  const cardData = JSON.parse(card.currentTarget.response).card;
  const newCard = new DOMNodeCollection(["<li></li>"]);

  newCard.html(cardData.name);
  deck.append([newCard]);

};

$l(() => {

  const addButton = $l("#add-card-btn");
  addButton.on("click", () => {
    $l.ajax({
      method: "GET",
      url: `https://api.magicthegathering.io/v1/cards/${ randomNum() }`,
      success: (card) => appendCard(card),
    });
  });

});
