import React,{useEffect,useState} from "react";
function Chat_Content() {
    const [content, setContent] = useState([]);
    const [reqUpdate,setreqUpdate] = useState(false);
    const [nameBox,setnameBox] = useState("");
    const [messageBox,setmessageBox] = useState("");
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
    }, 250);},[]);
    useEffect(() => {const interval = setInterval(() => {
      getData();
    }, 10000);},[]);
    return (
      <>
      
      <div style={{position:'absolute',top:'10%',height:'50 %',width:'100%',maxHeight:'80%',overflowY:'scroll',backgroundColor:'lightskyblue'}}>
      {content.map((mess) => (
        <p key={mess.id}>
          <span>{ mess.name + ' :   ' }</span>
          <span>{mess.message + ' ' }</span>
        </p>
      ))}
    </div>
    <div style={{top:'93%',position:'fixed',display:'flex',backgroundColor:"lightblue"}}>
      <p>Name</p>
      <input type="text" value={nameBox} onChange={e => setnameBox(e.target.value)}   />
      <p>Message</p>
      <input type="text" value={messageBox} onChange={e => setmessageBox(e.target.value)} />
      <button onClick={()=>{sendData()}}>Submit</button>
      </div>
    </>
    );
  }
  
  export default Chat_Content;