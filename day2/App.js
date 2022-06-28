import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./LoginPage"
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Logging />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Logging() {
  return(
    <div>
      <LoginPage />
    </div>
  )
}

function Main() {
  return(
    <div className="main">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default App;
