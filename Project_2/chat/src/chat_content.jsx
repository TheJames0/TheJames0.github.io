import React,{useEffect,useState} from "react";
import { Color } from "three";
import './chat.css'
import Input_field from "./input_field";
function Chat_Content() {
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
    function updateTime() {
      const dt = new Date().toLocaleString().replace(",","").replace(/:.. /," ");
      return dt
    }
    const stringToColour = (str,bordering) =>  {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = '#';
      var colour2 = '#';
      for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
          colour2 += ('00' + value.toString(8)).substr(-1);
      }
      
      return ({background: `linear-gradient(150deg,  ${colour} 0%,${colour2} 100%)`,padding:'10px',overflowX:'wrap'});
  }
    async function getUpdateStatus()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/chat/update_status`).then(response => response.text());
      if(results == 'true')
      {
      setreqUpdate(true)
      }
      else
      setreqUpdate(false)
            
    }
    async function getData()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/chat`,{}).then(response => response.json())
            .then(json => {return json});
            setContent(results)
    }
    async function sendData()
    {
      
      const result = fetch('https://chat-server-production-d84a.up.railway.app/chat/post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name: nameBox, message: messageBox, time: updateTime()})
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