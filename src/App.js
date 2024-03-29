import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';

import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

function App() {

  //useState 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);   //here alert is an obj not variable


  //function
  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000)

  }


  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      displayAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      displayAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode"

    }

  }



  return (
    <>
      <Navbar name="TextUtils by anj" mode={mode} togglemode={togglemode} />
      {/* here im passing text directly, in mode im passing a function  */}
      {/* default prop name
          <Navbar /> */}

      <Alert alert={alert} />

      <div className="container">
          <Routes>
            <Route path="/" element={<Textform heading="enter some text " displayAlert={displayAlert} />} />
            <Route path="/about" element={<Aboutus />} />
          </Routes>
      </div>
    </>
  )
}

export default App;
