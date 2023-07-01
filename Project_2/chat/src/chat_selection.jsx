import React,{useState,useEffect} from "react";
import './chat.css'
import stringToColour from './stringtocolour'
import NewRoomWindow from "./new_room";
function Chat_Selection_Screen(props) {
    const [content, setContent] = useState([]);
    const [isCreating,setIsCreating] = useState();
    
    //Fetch chats
    async function getData()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/rooms`,{}).then(response => response.json())
            .then(json => {return json});
            setContent(results)
    }
    async function deleteChat(name)
    {
      const result = await fetch('https://chat-server-production-d84a.up.railway.app/deleteroom', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: name})
    });
    
    
    }
    async function removeChat(name)
    {
      await deleteChat(name).then(()=>{getData()})
    }
    //Make a component for each returned chatlog
    //Make a component to add a new chatlog
    //Post chatlog 
    function setNewRoomWindow(state)
    {
        setIsCreating(state);
    }
    const content_display = () =>
  {
    if(isCreating)
    {
      return <NewRoomWindow windowstate={setNewRoomWindow}/>
    }
    else
    {
      return <></>
    }
  }
    useEffect(() => {getData()}, []);
    useEffect(() => {if(!isCreating){getData()}}, [isCreating]);
    return (
      <>
      <div className="room_container">
      {content.map((mess) => (
        <button key={mess.id} className="room" style={stringToColour(mess.name)} onClick={()=>{props.room_set(mess.name)}}>{mess.name}<button className="button"  style={{position:'absolute',top:'0px',left:'0px',width:'25px'}}onClick={(e)=>{removeChat(mess.name);e.stopPropagation();}}>x</button></button>
      ))}
      <button key={"add new room"} className="room"  onClick={()=>{setNewRoomWindow(true)}}>New Room</button>
      </div>
      {content_display()}
      </>
    )
}

export default Chat_Selection_Screen