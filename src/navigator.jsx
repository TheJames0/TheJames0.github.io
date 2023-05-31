import './navigator.css'
import Button from './button'
const NavigatorButton = (props) =>
{
    
    return <Button className="NavigatorButton" text={props.element}/>
}
const Navigator = (props) => {
    return (
        <div id ="Navigator">
        {props.elements.map((item) => (
        <NavigatorButton element = {item} />
      ))}
        </div>
    )
  }
  
  export default Navigator