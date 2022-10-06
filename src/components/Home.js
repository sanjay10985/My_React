import { addDoc, serverTimestamp, collection } from "firebase/firestore";
import React, { useState } from "react";
import {db} from '../firebase'

function Home() {

  const [text,setText]  = useState('');

  const sendText = async (e) =>
  {
    e.preventDefault();
    await addDoc(collection(db,'text'),{
      text: text,
      timestamp: serverTimestamp(),
    })
    setText("");
  }

  return (
    <form onSubmit={sendText} className="home">
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">
        Send
      </button>
    </form>
  );
}

export default Home;
