import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1fd12c142f20851792f8', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage messages={messages} />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function MainPage(messages) {
  return (
    <div>
      <Sidebar />
      <Chat messages={messages} />
    </div>
  )
}

function LoginPage() {
  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default App;
