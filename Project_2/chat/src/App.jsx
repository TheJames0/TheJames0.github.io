
import Chat_Selection_Screen from './chat_selection';
import Chat_Content from './chat_content';
import './chat.css'
import { useEffect, useState } from 'react';
function App() {
  const [room,setRoom] = useState("")
  function selectRoom(room)
  {
    setRoom(room)
  }
  const content_display = () =>
  {
    if(room == "")
    {
      return <Chat_Selection_Screen room_set={selectRoom}/>
    }
    else
    {
      return <Chat_Content room={room} room_set={selectRoom}/>
    }
  }
  return (
    <>
    <div className='header'> Messaging Server</div>
    {content_display()}
    </>
  );
}

export default App;
