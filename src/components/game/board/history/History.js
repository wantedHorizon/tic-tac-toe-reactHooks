import React from 'react';
const History = ({ history,setBoard,setTurn }) => {
    const renderList = () => {
        return history.map((history, index) => {
           return  <li key={index}>
                <button
                    onClick={()=>{
                        setBoard(history.board);
                        setTurn(history.turn);
                        }}
                    className="ui button"
                >
                phase#{index}
                </button>
            </li>
        })
    }
    return (
        <div className='History'>
            History
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}
export default History;