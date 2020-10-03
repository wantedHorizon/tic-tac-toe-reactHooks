import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Board from '../../components/game/board/Board';
import FormStartGame from '../../components/game/form/FormStartGame';
const Game = props => {
    return (

        <div className='Game'>
            

            <Router>
                <Route path="/game" exact component={Board} />
                <Route path="/" exact component={FormStartGame}/>
            </Router>
        </div>
    )
}
export default Game;