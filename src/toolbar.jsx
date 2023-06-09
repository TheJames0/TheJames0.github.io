import './toolbar.css'
import Navigator from './navigator.jsx';
import image1 from '/src/assets/reset.png';
import Button from './button';
import React,{useState,useEffect} from 'react';
const Toolbar = (props) => {
  const [Enabled,setEnabled] = useState(true);
  function handleVisible()
  {
    if(props.navCall.state == true)
    {
      setEnabled(true);
    }
    else
    {
      setEnabled(false)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => { handleVisible()}, 50);
    return () => {
      clearInterval(interval);
    };
  }, [props.navCall.state]);
    const handleReset = () => 
    {
      const event = new CustomEvent('reset', { detail: 'Reset frame' });
      window.dispatchEvent(event);
    };
    return (
      <>
        {Enabled ?
        <div id ="Toolbar">
        <Button click={handleReset} className="toolbar-button" text = "" icon={image1} iconclassName="toolbar-button-image"/>
        
        <Navigator elements={props.navelements} handlers={props.handlers}/>
        </div>
        
        :
        
        <></>
        }
        
      </>
    )
  }
  export default Toolbar