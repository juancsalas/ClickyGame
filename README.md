# ClickyGame - Juan Carlos Salas

### About the App
This is a memory game where users try to not repeat selected panels for as long as possible. Each time a panel is selected, the app will shuffle the panels adding a level of difficulty. The app will keep track of your current score as well as high score, which where it will update after the user has passed the current high score.

This game was built with a theme from the television show "The Simpsons" and includes several design elements and characters from the show.

### Development
The app is built using [React](https://github.com/facebook/react) and uses several custom components. For its functionality, [JSON](https://www.json.org/) is implemented which holds the information of each card, which is important into the App.js so it can be displayed and shuffled randomly.

There are several [Yarn](https://github.com/yarnpkg/yarn) packages which will have to be installed if the repository is ever cloned, as well as node packages.

The principal purpose for building this game was to practice breaking up an applications UI into several components, be able to manage component state as well as the response to user events.

### Deployment

To deploy locally, clone the repository into your local machine and run ```yarn install``` to install all Yarn packages. Once that is completed enter ```yarn start``` into your terminal, and the Reach will automatically deploy the app into your default browser


To see a demo of the application currently being hosted on Heroku, please [Click Here](https://damp-woodland-44296.herokuapp.com/yt).