import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <>
      <h1>Hello from Sajjad!</h1>
      <h2 > Data : {message}</h2>
    </>
  )
}

export default App
