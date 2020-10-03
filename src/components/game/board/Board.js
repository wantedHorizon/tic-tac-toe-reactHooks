import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cell from './cell/Cell';
import History from './history/History';
import "./Board.css";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
const Board = props => {
    const { player1 = "player1", player2 = "player2" } = props.location.state.playersDetail;
    const [board, setBoard] = useState(initialBoard.slice());
    const [turn, setTurn] = useState(0);
    const [winner, setWinner] = useState('');
    const [history, setHistory] = useState([]);

    useEffect(() => {

        if (turn < history.length) {
            return;
        }
        const newHistory = JSON.parse(JSON.stringify(history));
        newHistory.push({
            board: board,
            turn: turn
        });
        setHistory(newHistory);
    }, [turn])

    const getCellSineByTurn = () => {
        if (turn % 2) {
            return 'O'
        } else {
            return 'X'
        }
    }
    const onCellClickHandler = (i, j) => {
        if (board[i][j]) {
            return;
        }
        const sine = getCellSineByTurn();
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[i][j] = sine;
        if (turn + 1 < history.length) {
            console.log(`turn=${turn}, history.length${history.length}`);
            setHistory(history.slice(0, turn + 1));
        }
        setBoard(newBoard);
        setTurn(turn + 1);
        checkWin(newBoard);


    }
    const displayBoard = () => {
        const boardItems = board.map((line, row) => {
            return <div key={row} style={{ display: 'flex' }}>
                {line.map((cell, col) => <Cell key={col} sine={cell} onClick={() => onCellClickHandler(row, col)} />)}
                <br />
            </div>
        });
        return boardItems;

    }
    const resetGame = () => {
        setBoard(JSON.parse(JSON.stringify(initialBoard.slice())));
        setTurn(0);
        setWinner('');
        setHistory([]);
    }



    const checkWin = (board) => {

        let win = '';
        if(turn===8){
            win='draw';
        }
        //rows check
        board.forEach(row => {
            if (row[0] && row[1] === row[0] && row[0] === row[2]) {
                if (row[0] === 'X')
                    win = player1;
                else
                    win = player2;
            }
        });

        //cols check
        if (!win) {
            for (let col = 0; col < board[0].length; col++) {
                if (board[0][col] && board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
                    if (board[0][col] === 'X')
                        win = player1;
                    else
                        win = player2;
                }

            }
        }
        //diagonal check
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            if (board[0][0] === 'X')
                win = player1;
            else
                win = player2;
        }

        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            if (board[0][2] === 'X')
                win = player1;
            else
                win = player2;
        }
        setWinner(win);
    }
    return (
        <div className='Board' style={{display:'grid',gridTemplateColumns:winner?'1fr':'1fr 1fr'}}>
            {!winner &&<History history={history}  setBoard={setBoard} setTurn={setTurn} />}
            <div className="ui card" style={{display:'block',justifySelf:winner?'center':''}}>
                {
                    winner ? <h1>{winner === 'draw'? winner: `${winner} You Win!` }</h1> :
                        <div>
                            <h1 style={{color:turn%2?'red':'blue'}}>Turn: {turn % 2 ? player2 : player1}</h1>
                            {displayBoard()}

                        </div>
                }

                <button className="ui button primary" onClick={resetGame}>New Game</button>
                <Link className="ui button" to="/">Main Menu</Link>
            </div>
            
        </div>
    )
}
export default Board;