import React ,{useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Toolbar from './toolbar.jsx'
import Branch from './branch.jsx'
import Viewport from './viewport.jsx'
import Button from './button.jsx'
const Background = () => {

  return (
    <>
      <div id="background">
      </div>
    </>
  )
} 
function navHandle() {
  this.state = false;
  this.set_State = function(new_state) 
  {
  this.state = new_state;
  }
}
const title = <p className='title1'>James</p>
const title2 = <p className='title2'>Mather</p>
const viewport1 = <Viewport url="Project_1/Model_Configurator/index.html" x={"300"} y={"1620"} />
const project1_description = <p >This goal of this project was to produce a functioning customization system implemented with ThreeJS</p>
const child2 = <Branch key="1" text1="Description"  x="700" y="1020" parentx="600" parenty="620" mainbody={project1_description}/>;
const child5 = <Branch key="2" text1="Project" text2="Viewport" x="300" y="1620" parentx="600" parenty="620" viewport={viewport1} />;
const child1 = <Branch key="3" text1="Project" text2="Car-Configurator" x="600" y="620" child={[child2,child5]} parentx="0" parenty="20" nav_manage={new navHandle}/>;

const child4 = <Branch key="4" text1="Child of" text2="Test 2" x="-400" y="1020" parentx="-200" parenty="620" />;
const child3 = <Branch key="5" text1="Test" text2="2" x="-200" y="620" child={child4} parentx="0" parenty = "20" nav_manage={new navHandle}/>;



const child7 = <Branch key="6" text1="Child of" text2="Test 3" x="-2000" y="700" parentx="-500" parenty="200" />;
const child8 = <Branch key="7" text1="Child of" text2="Test 3" x="-1600" y="200" parentx="-500" parenty="200" />;
const child9 = <Branch key="8" text1="Child of" text2="Test 3" x="-1200" y="-300" parentx="-500" parenty="200" />;
const child10 = <Branch key="9" text1="Child of" text2="Test 3" x="-900" y="500" parentx="-500" parenty="200" />;
const child6 = <Branch key="10" text1="Test" text2="3" x="-500" y="200" child={[child7,child8,child9,child10]} parentx="0" parenty = "20" nav_manage={new navHandle} />;

const child11 = <Branch key="11" text1="Child of" text2="Test 4" x="1800" y="-400" parentx="1400" parenty="600" />;
const child12 = <Branch key="12" text1="Child of" text2="Test 4" x="1800" y="200" parentx="1400" parenty="600" />;
const child13 = <Branch key="13" text1="Child of" text2="Test 4" x="1800" y="600" parentx="1400" parenty="600" />;
const child14 = <Branch key="14" text1="Child of" text2="Test 4" x="1800" y="1400" parentx="1400" parenty="600"/>;
const child15 = <Branch key="15" text1="Test" text2="4" x="1400" y="600" child={[child11,child12,child13,child14]} parentx="0" parenty = "20" nav_manage={new navHandle}/>;
const backgroundinst = Background();
ReactDOM.createRoot(document.getElementById('static')).render(
  <React.StrictMode>
    <Toolbar navelements={["e1","e2","e3","e4"]} handlers={[child1.props.nav_manage,child3.props.nav_manage,child6.props.nav_manage,child15.props.nav_manage]} />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('transformable')).render(
  <React.StrictMode>
    <App />
    <Branch key="0" text1={title} text2={title2} x="0" y="20" child={[child1,child3,child6,child15]} parent_unloading="false" />
    
    {backgroundinst}
  </React.StrictMode>,
)
