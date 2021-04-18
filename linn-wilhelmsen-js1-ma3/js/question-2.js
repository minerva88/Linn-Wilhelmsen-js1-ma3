

const url = "https://api.rawg.io/api/games?key=1788f74214084ca6ade676778a2c8959dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

 async function getGames() {

    const response = await fetch(url);

    const results =  await response.json();

    const games = results.results;

    resultsContainer.innerHTML = "";


    for (let i = 0; i <= games.length; i++) {

        console.log(games[i]);

        const nameOfGame = games[i].name;

        const rating = games[i].rating;

        const amountOfTags = games[i].tags;


        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div>${nameOfGame}</div> <div>${rating}</div> <div>${amountOfTags}</div>`;
    }

}
