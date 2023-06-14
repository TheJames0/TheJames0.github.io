import './toolbar.css'
import Navigator from './navigator.jsx';
import image1 from '/src/assets/reset.png';
import Button from './button';
import React,{useState,useEffect} from 'react';
const Toolbar = (props) => {
  const [Enabled,setEnabled] = useState(true);
  function handleVisible()
  {
    let all_true = true;
    for(let i = 0; i < props.navCall.length;i++)
    {
      console.log(props.navCall[i].state);
      if(props.navCall[i].state == false)
      {
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
    const interval = setInterval(() => { handleVisible()}, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);
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