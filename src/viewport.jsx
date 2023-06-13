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
            const wh = Utilities.getElementOffset();
            var [x, y] = Utilities.getCanvasTranslation();
            x = x - parseInt(props.x);
            y = y - parseInt(props.y);
            console.log(x)
            console.log(y)
            return {transform: `translate(${x}px, ${y}px)`};
        }
        else
        {
            return {transform: `translate(${0}px, ${0}px)`};
        }
    }
    const viewport_enlarge_Click = (clickState) =>
    {
        setthisClickState(clickState);
        if(clickState)
        {
            //Disable navbar on enlarge
            props.navCall.set_State(false);
            setViewportClass("Viewport_Enlarged");
            Utilities.setCanvasTranslation([ 3000, 3000 ]);
        }
        else
        {
            //Enable navbar on enlarge
            props.navCall.set_State(true);
            setViewportClass("Viewport");
            Utilities.setCanvasTranslation([-props.x + 300,-props.y + 300]);
        }
        return !clickState
    }
return(
    <div  style={ViewportTranslation}>
    <Button className={"viewport_enlarge_button"} text="Enlarge" embed_hover={props.embed_hover} click={viewport_enlarge_Click}/>
    <iframe className = {ViewportClass} src={props.url + '?wmode=transparent'} allowtransparency="true"/>
    </div>
);
}
export default Viewport