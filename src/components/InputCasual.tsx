import {ChangeEvent, useState} from "react";
type InputCasualPropsType = {
    value?:string,
    onChange: ()=>void
}

export const InputCasual = (props:any) => {

    return (
        <>
            <input value={props.value} onChange={props.onChange}/>
        </>
    )
}