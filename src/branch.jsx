import React, { useState, useEffect} from "react";
import ReactDOM, { render } from 'react-dom';
import './branch.css';
import Button from "./button";
import Utilities from "./Utilities";
const  Branch = (props) => {
  const [showHover, setShowHover] = useState(false);
  const [branchOpen, setbranchOpen] = useState(false);
  const [isPositionStart, setisPositionStart] = useState(false);
  const [isChildUnload, setisChildUnload] = useState(true)
  const [EmbeddedButtonHover, setEmbeddedButtonHover] = useState(false);
  useEffect(() => {
    if(EmbeddedButtonHover)
    {
      setShowHover(false)
    }
    else
    {
    }
  },[EmbeddedButtonHover]);
  const handleDataUpdate = (newData) => {
    setEmbeddedButtonHover(newData);
  };

  function closeBranch()
  {
    

    setisChildUnload(true)
    setTimeout(() => {
      //After timeout
      setbranchOpen(false)
    }, 600)
    
  }
  function openBranch()
  {
    setisChildUnload(false)
    setbranchOpen(true);
    
  }
 
    //Called on parent_unloading state change
  useEffect(() => {
    if(props.parent_unloading == 'true')
    {
      setisChildUnload(true)
      setisPositionStart(false)
    }
    else
    {
      setisChildUnload(false)
      setisPositionStart(true)
    }
    } , [props.parent_unloading]);
  function handleEmbeddedButton()
  {

    var a = React.cloneElement(props.viewport, {embed_hover: handleDataUpdate});
    
    return a;
  }
  
  function handleChildren()
  {
    var newchild = [];

    var additionalState;
    if(isChildUnload == true)
    {
      additionalState = {parent_unloading:"true"}
    }
    else
    {
      additionalState = {parent_unloading:"false"}
    }
    if(props.child == null)
    return 
    if(props.child.length > 1)
    {
    for(let i = 0; i < props.child.length; i++)
    {
      const prop1 = Utilities.propAdd(props.child[i],[additionalState]);
      newchild.push(prop1);
    }
  }
  else
  {
    const test = Utilities.propAdd(props.child,[additionalState]);
    newchild.push(test);
  }
    return newchild;
  }

  

  return (
    <>
      <div style= 
      {
        isPositionStart ?
      {
        position:'fixed',
        left:`${props.x}px`,
        top:`${props.y}px`,
        transition: 'all 0.5s',
        opacity:1
        }
        :
        {
        position:'fixed',
        left:`${props.parentx}px`,
        top:`${props.parenty}px`,
        transition: 'all 0.5s',
        opacity:0 
        }
        }
        onMouseEnter={() => {
          setShowHover(true);

        }}
        onMouseLeave={() => {
          setShowHover(false);
          
        }}
        onClick={() => {
          if(branchOpen)
          {
            closeBranch()
          }
          else
          {
            openBranch()
          }
          
          
        }}>
        
      <div className={branchOpen ? "Clicked" : (!showHover ? "Branch" : "Hovered")}>
      <h1>{props.text1}</h1>
      <h2>{props.text2}</h2>
      {props.viewport && handleEmbeddedButton()}
       <>{props.mainbody}</>
      </div>
      </div>
      {branchOpen && handleChildren()}
    </>
  );
}

export default Branch
