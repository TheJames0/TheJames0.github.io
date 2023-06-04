import './viewport.css'
import Button from './button.jsx'
import React ,{useEffect ,useState} from 'react';
import Utilities from './Utilities';
const  Viewport = (props) => {
    const [ViewportClass,setViewportClass] = useState("Viewport");
    const [ViewportTranslation,setViewportTranslation] = useState()
    const [thisClickState,setthisClickState] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => setViewportTranslation(TranslationProperty), 0.1);
        return () => {
          clearInterval(interval);
        };
      }, [thisClickState]);
    
    
    const TranslationProperty = () =>
    {
        if(thisClickState)
        {
            console.log("in click state")
            const [x, y] = Utilities.getCanvasTranslation();
            return {transform: `translate(${x}px, ${y}px)`,transition: 'all 0.5s'};
        }
        else
        {
            console.log("not in click state")
            return {transform: `translate(${0}px, ${0}px)`,transition: 'all 0.5s'};
        }
    }
    const viewport_enlarge_Click = (clickState) =>
    {
        setthisClickState(clickState);
        if(clickState)
        {
            setViewportClass("Viewport_Enlarged");
        }
        else
        {
            setViewportClass("Viewport");
        }
        return !clickState
    }
return(
    <div  style={ViewportTranslation}>
    <Button className={"viewport_enlarge_button"} text="Enlarge" embed_hover={props.embed_hover} click={viewport_enlarge_Click}/>
    <iframe className = {ViewportClass} src={props.url}/>
    </div>
);
}
export default Viewport