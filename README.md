# Sample Space



## Description

Rec-Me is a sampler application that utilizes the sounds from space provided by NASA. This app is perfect for artists who want to use more exotic samples that are out of this world!



On page load, the user can play a collection of samples by using the drum kit provided, there are three different kits of samples to choose from Andromeda Strain, Magnetosphere, and Apollo 11. The samples can be played by mouse or keyboard, the associated keys are 'Q', 'W', 'E', 'R', 'A', 'S', 'D', 'F'.

There is also a sequencer that comes with a preloaded beat for each kit! Just hit play to start the space jams.

Our featured stretch technology for this project incorporated the Reactronica library to control audio as a function of state.

## Motivation
- Collaborate as a full stack team to create an application
- Utilize acceptance and E2E testing of site and asynchronous JavaScript with Cypress
- Create a multi-page application with React Router

## Technology Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-hotpink.svg?style=for-the-badge&logo=CSS3&logoColor=white)
- ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Deployment
This site is deployed on Surge and can be found [here](https://sample-space-fe.herokuapp.com/)!
Alternatively, this repo can be cloned to your local machine. run `npm i` before running `npm start`.

## Features

### Main Dashboard

<!-- On page load the user will see a random featured artist and related artist bubbles. Users can also use the search bar to search for a specific artist.

![rec-me-main-dash-demo](https://user-images.githubusercontent.com/92049763/163893175-3c53da44-fb0b-4c1d-a481-b52d40718436.gif)

![rec-me-search-demo](https://user-images.githubusercontent.com/92049763/163893229-b86c48f2-92b4-4b85-870c-5e276f5ee727.gif)

<details>
  <summary>Under the Hood</summary>
  Artist data is fetched from the TasteDive API while the artist images are fetched from the BandsInTown API. On each search submit, a new fetch is triggered.
</details>
</br>

### Single Artist Detail

When a user clicks on the center featured artist on the main dashboard, they are routed to a page with the information on that specific artist with a unique URL.

![rec-me-single-artist-demo](https://user-images.githubusercontent.com/92049763/163893278-4f503410-1933-4732-8568-44e4d6c4d514.gif)

<details>
  <summary>Under the Hood</summary>
  Single artist's are retrieved using the fetch API and interpolating an artist's name into the URL. The site's URL is also changed to reflect that individual artist's name via React Router. Users can bookmark this URL to return to later!
</details>
</br>

### Let's play a game!

A user can start the game by pressing the 'Lets play a game' button on the homepage. This switches the main page into game-mode. Users are given a random artist to try
to reach in 6 moves or less. Users are told how many turns are left and given motivational messages to keep going!

![rec-me-game-demo](https://user-images.githubusercontent.com/92049763/163893455-68e3e260-4f0b-4410-96aa-22b8b59cdeac.gif)

<details>
  <summary>Under the Hood</summary>
 Game state is tracked via the React Context API which allows users to see the turn count and whether they win or lose. We have a custom array for game goal artists that are most likely to be recognized.
</details>
</br>

### Testing & Accessibility

Rec-Me is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed. Rec-Me was also designed to be accessible for screen-readers and is fully tab-able.

## Future Additions
- Incorporate a favorites mechanism so user's can favorite artists and save them to a list
- Create customized user playlists
- Search and filter by genre
- Improve site accessibility

## Credits
Authors: [Maddie Law](https://github.com/maddielaw) [Eric Matlock](https://github.com/ermatlock) [Jerry Vohrer](https://github.com/Jerry-Vrrr) [Katie Ammon](https://github.com/kammon10)

Project spec -> [here](https://frontend.turing.edu/projects/module-3/stretch.html)

[Turing School of Software and Design's GitHub](https://github.com/turingschool-examples) -->
