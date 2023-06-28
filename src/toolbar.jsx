import './toolbar.css'
import Navigator from './navigator.jsx';
import image1 from '/src/assets/reset.png';
import Button from './button';
import React,{useState,useEffect} from 'react';
import {TransformWrapper,TransformComponent,} from "react-zoom-pan-pinch";
const Toolbar = (props) => {
  const [Enabled,setEnabled] = useState(true);
  useEffect(()=>{for(let i = 0; i < props.navCall.length;i++)
  {
    props.navCall[i].set_utility_callback(props.utility.resetTransform)
  }},[])
  function handleVisible()
  {
    let all_true = true;
    for(let i = 0; i < props.navCall.length;i++)
    {
      if(props.navCall[i].state == false)
      {
        props.utility.zoomToElement(props.navCall[i].ref,1.45,150,'easeOut');
        all_true = false;
      }
    }
    if(!all_true)
    {
      setEnabled(false)
    }
    else
    {
      setEnabled(true)
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => { handleVisible()}, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
    return (
      <>
        {Enabled ?
        <div id ="Toolbar">
        <Button click={() => props.utility.resetTransform()} className="toolbar-button" text = "" icon={image1} iconclassName="toolbar-button-image"/>
        
        <Navigator elements={props.navelements} start_state_handler={props.start_state_handler} state_handlers = {props.state_handlers} handlers={props.handlers} utility = {props.utility}/>
        </div>
        
        :
        
        <></>
        }
        
      </>
    )
  }
  export default Toolbar