import React, { useState, useEffect, useRef} from "react";
import ReactDOM, { render } from 'react-dom';
import './branch.css';
import Button from "./button";
import Utilities from "./Utilities";
import Xarrow,{useXarrow} from "react-xarrows";
import { v4 as uuid } from 'uuid';


const  Branch = (props) => {
  const [showHover, setShowHover] = useState(false);
  const [branchOpen, setbranchOpen] = useState(false);
  const [isPositionStart, setisPositionStart] = useState(false);
  const [isChildUnload, setisChildUnload] = useState(true)
  const [EmbeddedButtonHover, setEmbeddedButtonHover] = useState(false);
  const unique_id = uuid();
  const updateXarrow = useXarrow();
  if(props.nav_manage)
  useEffect(() => {update()},[props.nav_manage.state]);
  const update = () =>
  {
    if(props.nav_manage)
    if(props.nav_manage.state == false)
    {
      closeBranch();
    }
    else
    {
      openBranch();
      Utilities.setCanvasTranslation([-props.x + 750,-props.y + 300]);
    }
  }
  //On Component Mount
  useEffect(() => {
    const interval = setInterval(() => updateXarrow(), 1);
    if(props.nav_manage)
    return () => {  
      clearInterval(interval);
    };
  },[]);
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
    if(props.nav_manage)
    props.nav_manage.set_State(false);
    setTimeout(() => {
      //After timeout
      setbranchOpen(false)
    }, 600)
    
  }
  function openBranch()
  {
    if(props.nav_manage)
    props.nav_manage.set_State(true)
    setisChildUnload(false)
    setbranchOpen(true);
    
  }
 
    //Called on parent_unloading state change
  useEffect(() => {
    if(props.parent_unloading == 'true')
    {
      if(props.nav_manage)
      props.nav_manage.set_State(false);
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
      const keypropvalue = props.child[i].key;
      const keyprop = {key:keypropvalue}

      const parentref = unique_id;
      const parentprop = {refToParent:parentref}

      const prop1 = Utilities.propAdd(props.child[i],[additionalState, keyprop, parentprop]);
      newchild.push(prop1);
    }
  }
  else
  {
    const keypropvalue = props.child.key;
    const keyprop = {key:keypropvalue}

    const parentref = unique_id;
    const parentprop = {refToParent:parentref}

    const test = Utilities.propAdd(props.child,[additionalState,keyprop,parentprop]);
    newchild.push(test);
  }
    return newchild;
  }

  

  return (
    <>
    {props.refToParent ? <Xarrow className="arrow"
                start={props.refToParent} //can be react ref
                end={unique_id} //or an id
                startAnchor={"auto"}
                endAnchor={"top"}
                color="orangered"
                dashness={{strokeLen: 15, nonStrokeLen: 20}}
                showHead={false }
                />
              : <></>}
            
      
      <div  style= 
      {
        isPositionStart ?
      {
        display:'inline-block',
        width: 'fit-content',
        height: 'fit-content',
        position:'absolute',
        left:`${props.x}px`,
        top:`${props.y}px`,
        transition: 'all 0.5s',
        opacity:1,
        zIndex:`${props.zindex}`,
        padding: "5px"
        }
        :
        {
        display:'inline-block',
        width: 'fit-content',
        height: 'fit-content',
        position:'absolute',
        left:`${props.parentx}px`,
        top:`${props.parenty}px`,
        transition: 'all 0.5s',
        opacity:0 ,
        zIndex: `${props.zindex}`,
        padding: "5px"
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
      
      <div id={unique_id} className={branchOpen && props.child ? "Clicked" : (showHover && props.child ? "Hovered" : "Branch")}>
      
      <h1>{props.text1}</h1>
      <h2>{props.text2}</h2>
      {props.viewport && handleEmbeddedButton()}
       <>{props.mainbody}</>
       
       <p>{props.child ? '< >':''}</p>
      </div>
      </div>
      {branchOpen && handleChildren() }
    </>
  );
}

export default Branch
