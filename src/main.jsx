import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Toolbar from './toolbar.jsx'
import Branch from './branch.jsx'
const Background = () => {

  return (
    <>
      <div id="background">
      </div>
    </>
  )
}
const project1_iframe = <iframe src="Project_1/Model_Configurator/index.html" width="2000" height="2000"/>
const project1_description = <p >This goal of this project was to produce a functioning customization system implemented with ThreeJS</p>
const child2 = <Branch text1="Description"  x="700" y="1020" parentx="600" parenty="620" mainbody={project1_description}/>;
const child5 = <Branch text1="Project" text2="Viewport" x="300" y="1620" parentx="600" parenty="620" viewport={project1_iframe} />;
const child1 = <Branch text1="Project" text2="Car-Configurator" x="600" y="620" child={[child2,child5]} parentx="0" parenty="20"/>;

const child4 = <Branch text1="Child of" text2="Test 2" x="-400" y="1020" parentx="-200" parenty="620" />;
const child3 = <Branch text1="Test" text2="2" x="-200" y="620" child={child4} parentx="0" parenty = "20"/>;



const child7 = <Branch text1="Child of" text2="Test 3" x="-2000" y="700" parentx="-500" parenty="200" />;
const child8 = <Branch text1="Child of" text2="Test 3" x="-1600" y="200" parentx="-500" parenty="200" />;
const child9 = <Branch text1="Child of" text2="Test 3" x="-1200" y="-300" parentx="-500" parenty="200" />;
const child10 = <Branch text1="Child of" text2="Test 3" x="-900" y="500" parentx="-500" parenty="200" />;
const child6 = <Branch text1="Test" text2="3" x="-500" y="200" child={[child7,child8,child9,child10]} parentx="0" parenty = "20" />;

const child11 = <Branch text1="Child of" text2="Test 4" x="1800" y="-400" parentx="1400" parenty="600" />;
const child12 = <Branch text1="Child of" text2="Test 4" x="1800" y="200" parentx="1400" parenty="600" />;
const child13 = <Branch text1="Child of" text2="Test 4" x="1800" y="600" parentx="1400" parenty="600" />;
const child14 = <Branch text1="Child of" text2="Test 4" x="1800" y="1400" parentx="1400" parenty="600"/>;
const child15 = <Branch text1="Test" text2="4" x="1400" y="600" child={[child11,child12,child13,child14]} parentx="0" parenty = "20"/>;
const backgroundinst = Background();
ReactDOM.createRoot(document.getElementById('static')).render(
  <React.StrictMode>
    <Toolbar navelements={["e1","e2","e3","e4","e5","e6","e7","e8","e9"]}/>
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('transformable')).render(
  <React.StrictMode>
    <App />
    <Branch text1="James" text2="Mather" x="0" y="20" child={[child1,child3,child6,child15]} parent_unloading="false" />
    
    {backgroundinst}
  </React.StrictMode>,
)
