import React,{useEffect,useState} from "react";
import { Color } from "three";
function Chat_Content() {
    const [content, setContent] = useState([]);
    const [reqUpdate,setreqUpdate] = useState(false);
    const [nameBox,setnameBox] = useState("");
    const [messageBox,setmessageBox] = useState("");
    const stringToColour = (str,bordering) =>  {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      var colour = '#';
      for (var i = 0; i < 3; i++) {
          var value = (hash >> (i * 8)) & 0xFF;
          colour += ('00' + value.toString(16)).substr(-2);
      }
      return ({backgroundColor:colour,padding:'10px',border: '5px solid rgba(0, 0, 0, 0.1)',overflowX:'wrap'});
  }
    async function getUpdateStatus()
    {
      let results = await fetch(`https://chat-server-production-d84a.up.railway.app/chat/update_status`).then(response => response.text());
      console.log(results)
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
        body: JSON.stringify({name: nameBox, message: messageBox})
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
      
      <div style={{position:'absolute',top:'10%',height:'50 %',width:'100%',maxHeight:'80%',maxWidth:'100%',overflowY:'scroll'}}>
      {content.map((mess) => (
        <div key={mess.id} style={stringToColour(mess.name)}>
          <span>{ mess.name + ' :   ' }</span>
          <p style={{whiteSpace: 'pre-wrap',overflowWrap: 'break-word'}}>{mess.message + ' ' }</p>
        </div>
      ))}
    </div>
    <div style={{bottom:'5%',height:'7%',width:'100%',position:'absolute',display:'flex',backgroundColor:"lightblue"}}>
      <p style={{top:'40%'}}>Name</p>
      <input type="text" value={nameBox} onChange={e => setnameBox(e.target.value)}   />
      <p>Message</p>
      <input type="text" value={messageBox} onChange={e => setmessageBox(e.target.value)} />
      <button onClick={()=>{sendData()}}>Submit</button>
      </div>
    </>
    );
  }
  
  export default Chat_Content;