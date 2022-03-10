import {ChangeEvent} from "react";

type InputCasualPropsType = {
    value:string,
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void
}

export const InputCasual = (props:InputCasualPropsType) => {

    return (
        <>
            <input value={props.value} onChange={props.onChange}/>
        </>
    )
}