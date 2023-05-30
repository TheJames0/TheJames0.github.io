import React, { useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import './branch.css';

const  Branch = (props) => {
  const [showHover, setShowHover] = useState(false);
  const [branchOpen, setbranchOpen] = useState(false);
  const [isPositionStart, setisPositionStart] = useState(false);
  const [isChildUnload, setisChildUnload] = useState(true)
  function closeBranch()
  {
    

    setisChildUnload(true)
    console.log("close")
    setTimeout(() => {
      //After timeout
      setbranchOpen(false)
    }, 600)
    
  }
  function openBranch()
  {
    setisChildUnload(false)
    console.log("open")
    setbranchOpen(true);
    
  }
  function test() 
  {
    setTimeout(() => {
      //After timeout
      setbranchOpen(false)
    }, 200)
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



  function AddExtraProps(Component, extraProps) 
  {
    return <Component.type {...Component.props} {...extraProps} />;
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
      const test = AddExtraProps(props.child[i],additionalState);
      newchild.push(test);
    }
  }
  else
  {
    const test = AddExtraProps(props.child,additionalState);
    newchild.push(test);
  }
    console.log(newchild)
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
       <>{props.viewport}</>
       <>{props.mainbody}</>
      </div>
      </div>
      {branchOpen && handleChildren()}
    </>
  );
}

export default Branch
