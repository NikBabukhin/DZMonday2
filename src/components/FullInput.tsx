import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addNewMessageInList: (el:string)=>void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('');

    const onchangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }

    const onClickHandler=()=> {
        props.addNewMessageInList(title)
    }

    return (
        <div>
            <input onChange={onchangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}