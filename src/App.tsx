import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {InputCasual} from "./components/InputCasual";
import {ButtonForInputCasual} from "./components/ButtonForInputCasual";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

        const onClickHandlerDelete=(idMessage:number) => {
        const changedMessageAfterDelete = message.filter((el)=> {
            return message.indexOf(el) !== idMessage;
        })
        setMessage(changedMessageAfterDelete);
    }

    let [title, setTitle] = useState('');

    const onChangeHandler=(event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }

    const addNewMessage = () => {
        let newMessage = {message: title}
        title === ''? setMessage([...message]) : setMessage([newMessage, ...message])
        console.log('Hi', title);
    }

    return (
        <div className="App">
            <div>
                {/*<FullInput addNewMessageInList={addNewMessage}/>*/}
                <div>
                    <InputCasual onChange={onChangeHandler}/>
                    <ButtonForInputCasual addNewMessageInList={addNewMessage}/>
                </div>
            {message.map((el, index) => {
                return (
                    <div key={index} onChange={onChangeHandler}>
                        <span>{el.message}</span>
                        <button onClick={()=>onClickHandlerDelete(index)}>Delete</button>
                    </div>
                )
            })}
            </div>

        </div>
    );
}

export default App;




