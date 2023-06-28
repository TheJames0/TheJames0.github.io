import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Arrows from './Arrows'


function Arrow_Dictionary() {
  this.dict = null;
  this.set_dict = function(new_dict) 
  {
  this.dict = new_dict;
  }
}
const Application = <App arrow_dict={new Arrow_Dictionary}/>
ReactDOM.createRoot(document.getElementById('static')).render(
  <>
      {Application}
  </>,
)
ReactDOM.createRoot(document.getElementById('arrows')).render(
  <>
      <Arrows arrow_dict = {Application.props.arrow_dict}/>
  </>,
)
