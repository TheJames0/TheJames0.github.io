import React,{useEffect,useState} from "react";
import { Color } from "three";
import './chat.css'
import Input_field from "./input_field";
import stringToColour from './stringtocolour'
function Chat_Content(props) {
    const room = props.room
    const params = new URLSearchParams({collection: room});

    const [content, setContent] = useState([]);
    const [reqUpdate,setreqUpdate] = useState(false);
    const [nameBox,setnameBox] = useState("");
    const [messageBox,setmessageBox] = useState("");
    function setName(name)
    {
      setnameBox(name)
    }
    function setMessage(text)
    {
      setmessageBox(text)
    }
    function getTime() {
      const dt = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
      return dt
    }
    
    async function getUpdateStatus()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/chat/update_status`).then(response => response.text());
      if(results.update == 'true' && results.collection == room)
      {
      setreqUpdate(true)
      }
      else
      setreqUpdate(false)
            
    }
    async function getData()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/chat?`+params).then(response => response.json())
            .then(json => {return json});
            setContent(results)
    }
    async function sendData()
    {
      
      const result = fetch('https://chat-server-production-d84a.up.railway.app/chat/post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({collection:room, name: nameBox, message: messageBox, time: getTime()}),
        
    });

    }
    useEffect(() => {getData()}, []);
    useEffect(() => {if(reqUpdate ==true){getData();setreqUpdate(false);}}, [reqUpdate]);
    useEffect(() => {const interval = setInterval(() => {
      getUpdateStatus();
    }, 500);},[]);
    useEffect(() => {const interval = setInterval(() => {
      getData();
    }, 10000);},[]);
    return (
      <>
      <div className="button_back"><button className="button" onClick={()=>{props.room_set("")}}>Go back</button></div>
      <div className="chat_content">
      {content.map((mess) => (
        <div key={mess.id} className="message" style={stringToColour(mess.name)}>
          <span>{ mess.time + ' :   ' }</span>
          <p>{ mess.name + ' :   ' }</p>
          <p style={{whiteSpace: 'pre-wrap',overflowWrap: 'break-word'}}>{mess.message + ' ' }</p>
        </div>
      ))}
    </div>
    <div className={"input_div"}>
      <Input_field className={"input_field"} type="text" default={"Enter a name"} onChange={setName}  />
      <Input_field className={"input_field"} type="text" default={"Enter your message"} onChange={setMessage} />
      <button className={"button"} onClick={()=>{sendData()}}>Submit</button>
      </div>
    </>
    );
  }
  
  export default Chat_Content;