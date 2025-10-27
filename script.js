const main = document.querySelector("main");

function createGameCard(rank, title, playerCount, peak24, alltimePeak) {
  const card = document.createElement("section");
  card.classList.add("card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = "#" + rank + " | " + title;

  const playerCountElement = document.createElement("div");
  playerCountElement.textContent = "Current playercount: " + playerCount;

  const peak24Element = document.createElement("div");
  peak24Element.textContent = "24h peak: " + peak24;

  const alltimePeakElement = document.createElement("div");
  alltimePeakElement.textContent = "Alltime peak: " + alltimePeak;

  card.appendChild(titleElement);
  card.appendChild(playerCountElement);
  card.appendChild(peak24Element);
  card.appendChild(alltimePeakElement);

  main.appendChild(card);
}

async function loadData() {
  const promise = new Promise((resolve, reject) => {
    fetch("data.csv").then(
      (response) => resolve(response),
      (reason) => reject(reason)
    );
  });
  return promise;
}

const csvresponse = await loadData();
const csvdata = await csvresponse.text();
const data = csvdata.split("\n");

let currentindex = 1;

function showMoreCards() {
  for (let i = 0; i < 10; i++) {
    if (currentindex + i >= data.length) return;

    const cardData = data[currentindex + i].split('","');
    createGameCard(
      cardData[0].substr(1, cardData[0].length - 2),
      cardData[1],
      cardData[2],
      cardData[3],
      cardData[4].substr(0, cardData[4].length - 2)
    );
  }

  currentindex += 10;
}

showMoreCards();

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    showMoreCards();
  }
});
