const main = document.querySelector("main");

function createGameCard(rank, title, playerCount, peak24, alltimePeak) {
  const card = document.createElement("section");

  const titleElement = document.createElement("h2");
  const playerCountElement = document.createElement("div");
  const peak24Element = document.createElement("div");
  const alltimePeakElement = document.createElement("div");

  card.appendChild(titleElement);
  card.appendChild(playerCountElement);
  card.appendChild(peak24Element);
  card.appendChild(alltimePeakElement);

  main.appendChild(card)
}

createGameCard(34, "Gavin", 608, 608, 100054);