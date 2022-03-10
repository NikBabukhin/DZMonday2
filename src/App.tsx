import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const addNewMessage = (nameMessage: string) => {
        let newMessage = {message: nameMessage}
        setMessage([newMessage, ...message])
    }

    const onClickHandlerDelete=(idMessage:number) => {
        const changedMessageAfterDelete = message.filter((el)=> {
            return message.indexOf(el) !== idMessage;
        })
        setMessage(changedMessageAfterDelete);
    }

    return (
        <div className="App">
            <FullInput addNewMessageInList={addNewMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>
                        <span>{el.message}</span>
                        <button onClick={()=>onClickHandlerDelete(index)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default App;




