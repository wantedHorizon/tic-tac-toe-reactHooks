import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'


const FormStartGame = () => {
    let history = useHistory();
    const [player1,setPlayer1] = useState('');
    const [player2,setPlayer2] = useState('');
    const [error,setError] = useState('');
    const [checked,setChecked] = useState(false);
    const onSubmitHandler = (e) => {
        const form = e.target;
        e.preventDefault();
        if(!player1){
            setError('Please enter player1 name');
            return;
        }
        if(!player2){
            setError('Please enter player1 name');
            return;
        }
            if(!checked){
            setError('Please accept Terms and Conditions');
            return;
        }

        history.push('/game',{playersDetail:{player1:player1,player2:player2}});
    }

   

    const inputChange =(e,func)=>{
      func(e.target.value);  
    }

    
     
    return (
        <div className="ui card ">
        <h1 style={{color:'black'}}>Enter Players Names</h1>
        <Form onSubmit={onSubmitHandler}>
            <Form.Field>
                <label>Player1 Name:</label>
                <input name="player1" value={player1} onChange={(e)=>inputChange(e,setPlayer1)} placeholder='Player1' />
            </Form.Field>
            <Form.Field>
                <label>Player2 Name</label>
                <input name="player2" value={player2} onChange={(e)=>inputChange(e,setPlayer2)} placeholder='Player2' />
            </Form.Field>
            <Form.Field>
                <Checkbox checked={checked} onChange={()=>setChecked(!checked)} label='I agree to the Terms and Conditions' />
            </Form.Field>
            <p style={{color:'red'}}>{error}</p>
            <Button type='submit'>StartGame</Button>
        </Form>

        </div>
    )
}
export default FormStartGame