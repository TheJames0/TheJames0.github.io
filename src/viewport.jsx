import './viewport.css'
import Button from './button.jsx'
const  Viewport = (props) => {
return(
    <div className='Viewport'>
    <Button className="viewport_enlarge_button" text="Enlarge"/>
    <iframe src={props.url} width={props.width} height={props.height}/>
    </div>
);
}
export default Viewport