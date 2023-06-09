import './navigator.css'
import Button from './button'
const Navigator = (props) => {
  if(props.nav_manage)
  useEffect(() => {update()},[props.nav_manage.state]);
  
  const handleNavigatorSelect = (clickState,text) =>
  {
    for(let i= 0; i < props.elements.length;i++)
    {
      if(props.elements[i] == text)
      {
        props.handlers[i].set_State(true);
      }
      else
      {
        props.handlers[i].set_State(false);
      }
    }
  }
    return (
        <div id ="Navigator">
        {props.elements.map((item) => (
        <Button className="NavigatorButton" key = {item} text = {item} click={handleNavigatorSelect} />
      ))}
        </div>
    )
  }
  
  export default Navigator