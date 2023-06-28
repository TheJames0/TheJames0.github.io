import './App.css'
import React, {Component, useRef,useEffect,useState}  from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Toolbar from './toolbar.jsx'
import Branch from './branch.jsx'
import Viewport from './viewport.jsx'
import useWindowDimensions from './dimension';
const Background = () => {

  return (
    <>
      <div id="background">
      </div>
    </>
  )
} 

const App =(props) => {
function navHandle() {
  this.state = false;
  this.set_State = function(new_state) 
  {
  this.state = new_state;
  }
}
function navMenu_showState() {
  this.state = true;
  this.ref = true;
  this.set_State = function(new_state) 
  {
  this.state = new_state;
  }
  this.set_Ref = function(new_ref) 
  {
  this.ref = new_ref;
  }
}
function Branch_Ref() {
  this.ref = true;
  this.set_State = function(new_ref) 
  {
  this.ref = new_ref;
  }
}
function generate_Positions(){
  var arrow_List = [startnode];
  var positions = [];
  while(arrow_List.length != 0)
  {
    for(let i = 0; i < arrow_List.length; i++)
    {
      if(arrow_List[i].props.child)
      if(arrow_List[i].props.child.length > 1)
      {
        for(let x = 0; x<arrow_List[i].props.child.length;x++)
        {
          arrow_List.push(arrow_List[i].props.child[x])
          if(arrow_List[i].props.child[x].props.id)
          positions.push({x:(arrow_List[i].props.child[x].props.x),y:(arrow_List[i].props.child[x].props.y)})
            
        }
        
      }
      else
      {
        arrow_List.push(arrow_List[i].props.child)
        if(arrow_List[i].props.child.props.id)
        positions.push({x:(arrow_List[i].props.child.props.x),y:(arrow_List[i].props.child.props.y)})
          
      }
      
      
      //End of children remove arrowList item
      arrow_List.splice(i,1);
    }
  }
  return positions;
  }
function generate_Arrows(){
  var arrow_List = [startnode];
  var arrow_id_dict = [];
  while(arrow_List.length != 0)
  {
    for(let i = 0; i < arrow_List.length; i++)
    {
      if(arrow_List[i].props.child)
      if(arrow_List[i].props.child.length > 1)
      {
        for(let x = 0; x<arrow_List[i].props.child.length;x++)
        {
          arrow_List.push(arrow_List[i].props.child[x])
          arrow_id_dict.push({key:(arrow_List[i].props.child[x].props.myRef),
            value:(arrow_List[i].props.myRef)})
            
        }
        
      }
      else
      {
        arrow_List.push(arrow_List[i].props.child)
          arrow_id_dict.push({key:(arrow_List[i].props.child.props.myRef),
            value:(arrow_List[i].props.myRef)})
      }
      
      
      //End of children remove arrowList item
      arrow_List.splice(i,1);
    }
  }
  return arrow_id_dict
  }


const title = <p className='title1'>James</p>
const title2 = <p className='title2'>Mather</p>
const viewport1 = <Viewport id={"view1"} url="Project_1/Model_Configurator/index.html" x={"800"} y={"1720"} navCall={new navMenu_showState} />;
const project1_description = <p >This project is a vehicle customization tool intended for visualisation</p>
const project1_description2 = <p >This project was written in Javascript and relies on the ThreeJS library</p>
const child2 = <Branch key="1" text1="Description"  x="900" y="1120"  mainbody={project1_description} myRef={new Branch_Ref}/>;
const child16 = <Branch key="16" text1="Implementation"  x="1200" y="1120"  mainbody={project1_description2} myRef={new Branch_Ref}/>;
const child5 = <Branch key="2" text1="Project" text2="Viewport" x="800" y="1720" viewport={viewport1} myRef={new Branch_Ref}/>;
const child1 = <Branch id = "1" key="3" text1="Project 1" text2="Car-Configurator" x="600" y="820" child={[child2,child5,child16]} nav_manage={new navHandle} myRef={new Branch_Ref}/>;

const viewport2 = <Viewport id={"view2"} url="Project_2/chat/index.html" x={"-400"} y={"1020"} navCall={new navMenu_showState} />;
const child4 = <Branch key="4" text1="Child of" text2="Test 2" x="-400" y="1020" viewport={viewport2} myRef={new Branch_Ref}/>;
const child3 = <Branch id = "2" key="5" text1="Project 2" text2="Messaging App" x="-200" y="620" child={child4} nav_manage={new navHandle} myRef={new Branch_Ref}/>;


const child7 = <Branch key="6" text1="Child of" text2="Test 3" x="-2000" y="700" myRef={new Branch_Ref}/>;
const child8 = <Branch key="7" text1="Child of" text2="Test 3" x="-1600" y="200" myRef={new Branch_Ref}/>;
const child9 = <Branch key="8" text1="Child of" text2="Test 3" x="-1200" y="-300" myRef={new Branch_Ref}/>;
const child10 = <Branch key="9" text1="Child of" text2="Test 3" x="-900" y="500" myRef={new Branch_Ref}/>;
const child6 = <Branch id = "3" key="10" text1="Test" text2="3" x="-500" y="200" child={[child7,child8,child9,child10]} nav_manage={new navHandle} myRef={new Branch_Ref}/>;

const child11 = <Branch key="11" text1="Child of" text2="Test 4" x="1800" y="-400" myRef={new Branch_Ref}/>;
const child12 = <Branch key="12" text1="Child of" text2="Test 4" x="1800" y="200" myRef={new Branch_Ref}/>;
const child13 = <Branch key="13" text1="Child of" text2="Test 4" x="1800" y="600" myRef={new Branch_Ref}/>;
const child14 = <Branch key="14" text1="Child of" text2="Test 4" x="1800" y="1400" myRef={new Branch_Ref}/>;
const child15 = <Branch id = "4" key="15" text1="Test" text2="4" x="1400" y="600" child={[child11,child12,child13,child14]} nav_manage={new navHandle} myRef={new Branch_Ref}/>;
const backgroundinst = Background();
const startnode = <Branch key="0" text1={title} text2={title2} x="0" y="20" child={[child1,child3,child6,child15]} parent_unloading="false" myRef={new Branch_Ref}/>;

useEffect(() => {props.arrow_dict.set_dict(generate_Arrows())},[])
const positions = generate_Positions();
console.log(positions)
return(
  <React.Fragment>
  
  <TransformWrapper initialPositionX={19920 + parseFloat(useWindowDimensions().width/2.0 )}
  initialPositionY={19850+parseFloat(useWindowDimensions().height/2.0 )}  initialScale={0.5} minScale={0.2} maxScale={4} limitToBounds={false} panning={{disabled:false,velocityDisabled:true}} velocityAnimation={{disabled:false,animationTime:100,equalToMove:false}}>
  {(utils) => (
    <>
  <Toolbar navelements={["Car_Configurator","Test2","Test3","Test4"]} handlers={positions} navCall={[viewport1.props.navCall,viewport2.props.navCall]}  utility={utils}/>
  

  <TransformComponent wrapperClass='viewport' >
    {startnode}
    {backgroundinst}
    </TransformComponent>
    </>
  )}
    </TransformWrapper>
    </React.Fragment>
)


}

export default App
