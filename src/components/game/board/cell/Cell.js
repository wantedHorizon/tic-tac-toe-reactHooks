import React from 'react';
const Cell = props => {
    let color ='red';
    if(props.sine ==='X'){
        color= 'blue';
    }
    return (
        <div
            onClick={props.onClick}
            className='Cell'
            style={{ border: '1px solid black', height: '10vh', width: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: color }}>
            {props.sine}

        </div>
    )
}
export default Cell;