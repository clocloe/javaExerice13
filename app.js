"use strict";

//const FOOTBALL_API_KEY = "CHANGE ME!";

/*const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": FOOTBALL_API_KEY,
    "x-rapidapi-host": "https://v3.football.api-sports.io/"
  },
  redirect: "follow"
};*/

// Utilisez l'objet pour tester votre logiciel si aucun match n'est joué en ce moment
// Il s'agit d'une réponse de l'API lors du match Corée - Ghana du 28.11.22

const bodyElement = document.querySelector("body"); // changer dans le html le falsh en true
bodyElement.dataset.loaded = "true";
const fixture = {
   "get": "fixtures",
   "parameters": {
       "live": "all",
       "league": "1"
   },
   "errors": [],
   "results": 1,
   "paging": {
       "current": 1,
       "total": 1
   },
   "response": [
       {
           "fixture": {
               "id": 855757,
               "referee": "Anthony Taylor, England",
               "timezone": "UTC",
               "date": "2022-11-28T13:00:00+00:00",
               "timestamp": 1669640400,
               "periods": {
                   "first": 1669640400,
                   "second": null
               },
               "venue": {
                   "id": null,
                   "name": "Education City Stadium",
                   "city": "Al Rayyan"
               },
               "status": {
                   "long": "First Half",
                   "short": "1H",
                   "elapsed": 30
               }
           },
           "league": {
               "id": 1,
               "name": "World Cup",
               "country": "World",
               "logo": "https://media.api-sports.io/football/leagues/1.png",
               "flag": null,
               "season": 2022,
               "round": "Group Stage - 2"
           },
           "teams": {
               "home": {
                   "id": 17,
                   "name": "South Korea",
                   "logo": "https://media.api-sports.io/football/teams/17.png",
                   "winner": false
               },
               "away": {
                   "id": 1504,
                   "name": "Ghana",
                   "logo": "https://media.api-sports.io/football/teams/1504.png",
                   "winner": true
               }
           },
           "goals": {
               "home": 0,
               "away": 1
           },
           "score": {
               "halftime": {
                   "home": 0,
                   "away": 1
               },
               "fulltime": {
                   "home": null,
                   "away": null
               },
               "extratime": {
                  "home": null,
                  "away": null
               },
               "penalty": {
                   "home": null,
                   "away": null
              }
          },
          "events": [
               {
                  "time": {
                      "elapsed": 21,
                     "extra": null
                  },
                  "team": {
                      "id": 1504,
                      "name": "Ghana",
                      "logo": "https://media.api-sports.io/football/teams/1504.png"
                  },
                  "player": {
                       "id": 3421,
                       "name": "D. Amartey"
                  },
                  "assist": {
                       "id": null,
                       "name": null
                   },
                  "type": "Card",
                  "detail": "Yellow Card",
                  "comments": "Elbowing"
              },
              {
                  "time": {
                      "elapsed": 24,
                      "extra": null
                  },
                  "team": {
                      "id": 1504,
                      "name": "Ghana",
                      "logo": "https://media.api-sports.io/football/teams/1504.png"
                  },
                  "player": {
                      "id": 47480,
                      "name": "M. Salisu"
                  },
                  "assist": {
                      "id": null,
                      "name": null
                  },
                  "type": "Goal",
                  "detail": "Normal Goal",
                  "comments": null
              },
              {
                  "time": {
                      "elapsed": 27,
                       "extra": null
                   },
                  "team": {
                       "id": 17,
                       "name": "South Korea",
                    "logo": "https://media.api-sports.io/football/teams/17.png"
                  },
                  "player": {
                      "id": 2903,
                      "name": "Jung Woo-Young"
                   },
                  "assist": {
                      "id": null,
                      "name": null
                  },
                  "type": "Card",
                  "detail": "Yellow Card",
                  "comments": "Holding"
              }
          ]
      }
   ]
 }
 AfficheHome();
 tempsEcoule();

 function tempsEcoule(){
  const tempsEcoule = fixture.response[0].fixture.status.elapsed;
  console.log(tempsEcoule);
  const timeDiv = document.querySelector(".time"); // pour changer dans une div ce qu'il y a à l'intérieur
  timeDiv.innerHTML = tempsEcoule;

 }
 function AfficheHome (){
  const homeTeamName = fixture.response[0].teams.home.name;
  console.log(homeTeamName);
  const logoTeamHome = fixture.response[0].teams.home.logo;
  console.log(logoTeamHome);
  const nbGool = fixture.response[0].goals.home;
  console.log(nbGool);

  const section = document.getElementsByClassName("home")[0];

 let divCountry = document.createElement("div");
 let divFlag = document.createElement("div");
 let divScore = document.createElement("div");

 divCountry.setAttribute ("class", "country");
 divFlag.setAttribute ("class" , "flag");
 divScore.setAttribute ("class", "score");

 let img = document.createElement("img");
 img.setAttribute("src", logoTeamHome);
 img.setAttribute("alt", "Logo");
 

 section.appendChild(divCountry);
 section.appendChild(divFlag);
 section.appendChild(divScore);
 divFlag.appendChild(img);




 divCountry.innerHTML = homeTeamName;
 //divFlag.innerHTML = logoTeamHome;
 divScore.innerHTML = nbGool;
}

AfficheAway();
 function AfficheAway (){
  const awayTeamName = fixture.response[0].teams.away.name;
  console.log(awayTeamName);
  const logoTeamAway = fixture.response[0].teams.away.logo;
  console.log(logoTeamAway);
  const nbGoolAway = fixture.response[0].goals.away;
  console.log(nbGoolAway);


  const section = document.getElementsByClassName("away")[0];

 let divCountry = document.createElement("div");
 let divFlag = document.createElement("div");
 let divScore = document.createElement("div");

 divCountry.setAttribute ("class", "country");
 divFlag.setAttribute ("class" , "flag");
 divScore.setAttribute ("class", "score");

 let img = document.createElement("img");
 img.setAttribute("src", logoTeamAway);
 img.setAttribute("alt", "Logo");
 

 section.appendChild(divCountry);
 section.appendChild(divFlag);
 section.appendChild(divScore);
 divFlag.appendChild(img);
 divCountry.innerHTML = awayTeamName;
 divScore.innerHTML = nbGoolAway;
}





/*<section class="home">
<!-- <h1 class="country">Brasil</h1>
<img class="flag" src="https://flagcdn.com/br.svg" alt="">
<div class="score">0</div> -->
</section>
<div class="time"></div>
<section class="away">
<!-- <h1 class="country">France</h1>
<img class="flag" src="https://flagcdn.com/fr.svg" alt="">
<div class="score">3</div> -->
</section>*/

