import './button.css'
import React,{ useCallback, useEffect, useState} from 'react';


const  Button = (props) => {
    const [Clicked,setClicked] = useState(true);

    function handleEnter()
    {   
        if(props.embed_hover)
        {
            props.embed_hover(true);
        }
        
    }
    function handleExit()
    {
        if(props.embed_hover)
        {
            props.embed_hover(false);
        }
    }
    function mouseClick()
    {
        if(props.click)
        {
            setClicked(props.click(Clicked,props.text));
        }
        
    }
return(
    <button className={props.className} onClick={mouseClick} onMouseEnter={handleEnter } onMouseLeave={handleExit}>
    {props.text}
    <Button_Image icon = {props.icon} className={props.iconclassName} />
    

    </button>
);
}
export default Button
const  Button_Image = (props) => {
    if(props.icon != undefined)
    {
        return(<img
         className = {props.className} src={props.icon}>
            
         </img>);
    }
    else
    {
        return(<></>);
    }
    
}