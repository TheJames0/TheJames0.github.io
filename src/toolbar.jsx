import './toolbar.css'
import Navigator from './navigator.jsx';
import image1 from '/src/assets/reset.png';
const Toolbar = (props) => {
    const handleReset = () => 
    {
      const event = new CustomEvent('reset', { detail: 'Reset frame' });
      window.dispatchEvent(event);
    };
    return (
      <>
        <div id ="Toolbar">
        <button onClick={handleReset} className = "toolbar-button" id="reset">
        <img className = "toolbar-button-image" src={image1}></img>
        </button>
        <Navigator elements={props.navelements}/>
        </div>
      </>
    )
  }
  
  export default Toolbar