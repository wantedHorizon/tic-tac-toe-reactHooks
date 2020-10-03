
# tic-tac-toe-

## ReactJS 
Simple tic-tac-toe game built with react hooks.
# **State object**

```
state = {

 Form
 --------
    player1,player2 = strings  --players name
    checkbox= false/true --user agreement

Board
---------
    board[3][3]: [
        ['X','null','O],
        ['X','null','O],
        ['X','null','O]
    ]
    turn: 0-9 --on which turn are we on(history[turn])
    winner: ""/"player{1,2}"/"draw" --game over and name of the winner 
    history: [{board:[3][3],turn:(0-9)},{board:[3][3],turn:(0-9)} ...]

    }
```

## **Components**

- **Game**
    
  > Holds the entire game and router

- **Board**

  > Manages board display,handlers and history

- **History**
  > List of all prev history options

* **Cell**
  > holds ['X' / 'O' / null] according to board state.



- **Form**
  >  On game start user must choose player1 and player2 names



# Components Structure

```
    <App>
        <Game>
        

        <Router>
            <Route "/">
                <Form/>
            <Route>

            <Route "/game">
                <History />
                <Board>
                    {<Cell/>} * 3
                    {<Cell/>} * 3 
                    {<Cell/>} * 3 
                    <button>New Game</button>
                    <button>Main Menu</button>
                </Board>
            </Route>

             
        </Router>
        </Game>
    </App>
}
```

<!-- ## Card Object Description -->

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
