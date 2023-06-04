import './toolbar.css'
import Navigator from './navigator.jsx';
import image1 from '/src/assets/reset.png';
import Button from './button';
const Toolbar = (props) => {
    const handleReset = () => 
    {
      const event = new CustomEvent('reset', { detail: 'Reset frame' });
      window.dispatchEvent(event);
    };
    return (
      <>
        <div id ="Toolbar">
        <Button click={handleReset} className="toolbar-button" text = "" icon={image1} iconclassName="toolbar-button-image"/>
        
        <Navigator elements={props.navelements}/>
        </div>
      </>
    )
  }
  export default Toolbar