import './navigator.css'
const NavigatorButton = (props) =>
{
    return (<button className="NavigatorButton">{props.element}</button>)
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