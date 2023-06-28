import './navigator.css'
import Button from './button'
import React, {useState} from 'react';
import useWindowDimensions from './dimension';
const Navigator = (props) => {
  
  const { height, width } = useWindowDimensions();
  const handleNavigatorSelect = (clickState,text) =>
  {
    for(let i= 0; i < props.elements.length;i++)
    {
      if(props.elements[i] == text)
      {
        console.log(parseFloat(width));
        console.log(parseFloat(height));
        props.utility.setTransform((20000 + parseFloat(width/2.3)) - parseInt(props.handlers[i].x),(20000 + parseFloat(height/2.5)) - parseInt(props.handlers[i].y)  ,1)
      }
    }
  }
    return (
        <div id ="Navigator">
        {props.elements.map((item) => (
        <Button className="NavigatorButton" key = {item} text = {item} click={handleNavigatorSelect} />
      ))}
        </div>
    )
  }
  
  export default Navigator