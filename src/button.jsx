import './button.css'
import React,{useEffect, useState} from 'react';
const  Button = (props) => {
return(
    <>
    
    <button className={props.className} onClick={props.eventhandler}>
    {props.text}
    <Button_Image icon = {props.icon} className={props.iconclassName} />
    

    </button>
    </>
);
}
export default Button
const  Button_Image = (props) => {
    if(props.icon != undefined)
    {
        return(<img className = {props.className} src={props.icon}></img>);
    }
    else
    {
        return(<></>);
    }
    
}