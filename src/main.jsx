import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Toolbar from './toolbar.jsx'
import Branch from './branch.jsx'
import Viewport from './viewport.jsx'
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
function navMenu_showState() {
  this.state = true;
  this.set_State = function(new_state) 
  {
  this.state = new_state;
  }
}

const title = <p className='title1'>James</p>
const title2 = <p className='title2'>Mather</p>
const viewport1 = <Viewport url="Project_1/Model_Configurator/index.html" x={"300"} y={"1620"} navCall={new navMenu_showState} />;
const project1_description = <p >This project is a vehicle customization tool intended for visualisation</p>
const project1_description2 = <p >This project was written in Javascript and relies on the ThreeJS library</p>
const child2 = <Branch key="1" text1="Description"  x="900" y="1120"  mainbody={project1_description}/>;
const child16 = <Branch key="16" text1="Implementation"  x="1200" y="1120"  mainbody={project1_description2}/>;
const child5 = <Branch key="2" text1="Project" text2="Viewport" x="100" y="1420" viewport={viewport1} />;
const child1 = <Branch key="3" text1="Project" text2="Car-Configurator" x="600" y="820" child={[child2,child5,child16]} nav_manage={new navHandle}/>;

const viewport2 = <Viewport url="Project_2/chat/index.html" x={"300"} y={"1620"} navCall={new navMenu_showState} />;
const child4 = <Branch key="4" text1="Child of" text2="Test 2" x="-400" y="1020" viewport={viewport2}/>;
const child3 = <Branch key="5" text1="Test" text2="2" x="-200" y="620" child={child4} nav_manage={new navHandle}/>;



const child7 = <Branch key="6" text1="Child of" text2="Test 3" x="-2000" y="700" />;
const child8 = <Branch key="7" text1="Child of" text2="Test 3" x="-1600" y="200" />;
const child9 = <Branch key="8" text1="Child of" text2="Test 3" x="-1200" y="-300" />;
const child10 = <Branch key="9" text1="Child of" text2="Test 3" x="-900" y="500" />;
const child6 = <Branch key="10" text1="Test" text2="3" x="-500" y="200" child={[child7,child8,child9,child10]} nav_manage={new navHandle} />;

const child11 = <Branch key="11" text1="Child of" text2="Test 4" x="1800" y="-400" />;
const child12 = <Branch key="12" text1="Child of" text2="Test 4" x="1800" y="200" />;
const child13 = <Branch key="13" text1="Child of" text2="Test 4" x="1800" y="600" />;
const child14 = <Branch key="14" text1="Child of" text2="Test 4" x="1800" y="1400"/>;
const child15 = <Branch key="15" text1="Test" text2="4" x="1400" y="600" child={[child11,child12,child13,child14]} nav_manage={new navHandle}/>;
const backgroundinst = Background();

ReactDOM.createRoot(document.getElementById('static')).render(
  <>
    <Toolbar navelements={["Car_Configurator","Test2","Test3","Test4"]} handlers={[child1.props.nav_manage,child3.props.nav_manage,child6.props.nav_manage,child15.props.nav_manage]} navCall={[viewport1.props.navCall,viewport2.props.navCall]}/>
  </>,
)

ReactDOM.createRoot(document.getElementById('transformable')).render(
  <>
    <App />
    <Branch key="0" text1={title} text2={title2} x="0" y="20" child={[child1,child3,child6,child15]} parent_unloading="false" />
    
    {backgroundinst}
  </>,
)
