import Xarrow,{useXarrow} from "react-xarrows";
import React, { useState, useEffect, useRef} from "react";
const Arrows =(props) => {
  const updateXarrow = useXarrow();
  useEffect(() => {
    const interval = setInterval(() => {updateXarrow();}, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function arrow_return()
  {
    var final = [];
    
    for(let i = 0;i < props.dict.length; i++)
    {
    let key = props.dict[i].key.ref;
    let value = props.dict[i].value.ref;
    if(key.current != null && value.current != null)
    final.push(
    <Xarrow key={i}
    start={value} //can be react ref
    end={key} //or an id
    startAnchor={"auto"}
    endAnchor={"top"}
    color="orangered"
    dashness={{strokeLen: 15, nonStrokeLen: 20, animation:0}}
    showHead={false } />
    )
  }
  console.log(props.dict[0].key.ref)
  return final;
}



    return (<>
    
    {arrow_return()}
    </>)
    }
  export default Arrows