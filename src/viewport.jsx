import './viewport.css'
import Button from './button.jsx'
import React ,{useEffect ,useState} from 'react';
import Utilities from './Utilities';
function zoomout()
{
        
    const viewportmeta = document.querySelector('meta[name=viewport]');
    viewportmeta.setAttribute('content', "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0");
    console.log("reset")
        
}
const  Viewport = (props) => {
    const [ViewportClass,setViewportClass] = useState("Viewport");
    const [ViewportTranslation,setViewportTranslation] = useState()
    const [thisClickState,setthisClickState] = useState(false)
    
    useEffect(()=>{props.navCall.set_Ref(props.id)})
    const viewport_enlarge_Click = (clickState) =>
    {
        setthisClickState(clickState);
        if(clickState)
        {
            //Disable navbar on enlarge
            props.navCall.set_State(false);
            zoomout()
            setViewportClass("Viewport_Enlarged");
        }
        else
        {
            //Enable navbar on unenlarge
            props.navCall.set_State(true);
            zoomout()
            props.navCall.utilitycallback()
            setViewportClass("Viewport");
        }
        return !clickState
    }
return(
    <div   style={{position:'relative'}}>
    <Button className={"viewport_enlarge_button"} text="Enlarge" embed_hover={props.embed_hover} click={viewport_enlarge_Click}/>
    <iframe className = {ViewportClass} src={props.url + '?wmode=transparent'} allowtransparency="true"/>
    <div id={props.id} style={{left:'0px',top:'0px',position:'absolute'}}></div>
    </div>
);
}
export default Viewport