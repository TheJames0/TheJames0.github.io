import './navigator.css'
import Button from './button'
import React, {useEffect, useState} from 'react';
import useWindowDimensions from './dimension';
const Navigator = (props) => {
  
  const { height, width } = useWindowDimensions();
  useEffect(()=>{},props.state_handlers)
  const handleNavigatorSelect = (clickState,text) =>
  {
    props.start_state_handler.set_State(true)
        props.start_state_handler.branch_callback()
    for(let i= 0; i < props.elements.length;i++)
    {
      if(props.state_handlers[i].state != undefined)
      if(props.elements[i] == text)
      {
        
        props.state_handlers[i].set_State(true)
        props.utility.setTransform((20000 + parseFloat(width/2.3)) - parseInt(props.handlers[i].x),(20000 + parseFloat(height/2.5)) - parseInt(props.handlers[i].y)  ,1)
        
        for(let x= 0; x < props.elements.length;x++)
        {
          if(i != x)
          {
            props.state_handlers[x].set_State(false)
          }
        }
      }
      props.state_handlers[i].branch_callback()
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