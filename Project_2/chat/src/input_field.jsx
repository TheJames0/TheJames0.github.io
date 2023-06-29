import React,{useEffect,useState} from "react";
function Input_field(props) {
    const default_value = props.default;
    const [focused,setFocused] = useState(false)
    const [empty,setEmpty] = useState(true)
    useEffect(()=>{text_value()},[focused,empty])
    const text_value = () =>
    {
        if(focused && empty)
        {
            return {value:""}
            
        }
        if(!focused && empty)
        {
            return {value:default_value}
        }
        return
    }
    function handleChange(event)
    {
        if (event.target.value.trim().length > 0) 
        {
            if(event.target.value == default_value)
            {
                setEmpty(true);
            }
            else
            {
                setEmpty(false)
            }
          } 
          else 
          {
            setEmpty(true);
          }
        props.onChange(event.target.value);
        
    }
    return (
      <>
      <input className={props.className} {...text_value()} type="text"  onChange={(e) => handleChange(e)} onFocus={()=>{setFocused(true)}} onBlur={()=>{setFocused(false)}} />
      
      </>
    );
  }
  export default Input_field