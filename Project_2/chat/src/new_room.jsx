import React,{useState} from "react"
import './chat.css'
import Input_field from "./input_field"
function NewRoomWindow(props) {
    const [nameBox,setnameBox] = useState("");
    function updateName(string)
    {
        setnameBox(string);
    }
    async function createNewChat()
    {
        await sendData().then(()=>{props.windowstate(false)})
        
    }
    async function sendData()
    {
      
      const result = await fetch('https://chat-server-production-d84a.up.railway.app/postroom', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: nameBox})
    });
    await result.json;
}
    return(
    <>
    <div className="new_room_window">
    <div className="button_back" ><button className="button" onClick={()=>{props.windowstate(false)}}>Go Back</button></div>
    <div style={{position:'absolute',top:'25%',left:'5%',width:'240%'}}>
    <Input_field className={"input_field"} type="text" default={"Enter a chat name"} onChange={updateName} />
    <div>
    <button className="button" onClick={() =>  createNewChat()}>Create new chat</button>
    </div>
    </div>
    </div></>)
}

export default NewRoomWindow