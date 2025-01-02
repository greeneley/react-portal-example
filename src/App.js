import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ReactDOM from "react-dom/client";
import {createPortal} from "react-dom";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      {isModalOpen && createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.getElementById('portal-root')
      )}
    </div>
  );
}

function Modal({onClose}) {
  return (
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <h1>Modal Title</h1>
        <p>This is a modal dialog.</p>
        <button onClick={onClose}>Close</button>
      </div>
  )
}
export default App;
