type ButtonForInputCasualPropsType = {
    addNewMessageInList: ()=>void
}

export const ButtonForInputCasual=(props:ButtonForInputCasualPropsType)=> {

    return (
        <button onClick={props.addNewMessageInList}>+</button>
    )
}