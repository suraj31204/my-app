import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Form from './components/Form';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const[color,setColor] = useState(null);

  const checkColor = () => {
    if(color === null) 
    {
      setColor("color");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "green";
      showAlert("green mode has been enabled !","success");
      setMode('light');
    }
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColor(null);
    }
  }




  const checkColor2 = () => {
    if(color === null) 
    {
      setColor("color");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "red";
      showAlert("Red mode has been enabled !","danger");
      setMode('light');
    }
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColor(null);
    }
  }



  const checkColor3 = () => {
    if(color === null) 
    {
      setColor("color");
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "yellow";
      showAlert("Yellow mode has been enabled!", "warning");
      setMode('light');
    }
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColor(null);
    }
  }



  const checkColor4 = () => {
    if(color === null) 
    {
      setColor("color");
      document.body.style.backgroundColor = "#87CEEB";
      document.body.style.color = '#87CEEB';
      showAlert("Sky Blue mode has been enabled !", "info");
      setMode('light');
    }
    else
    {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setColor(null);
    }
  }




  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout( () => {
      setAlert(null);
    },2500)
  }

  const toggleMode = () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor= '#343a40';
      showAlert("Dark mode has been enabled !","success");
      document.title = 'TextUtils - DarkMode';
      
      //interval or add

      // setInterval(() => {
      //   document.title = 'Install TextUtils';
      // },2000);

      // setInterval(() => {
      //   document.title = 'Download TextUtils';
      // },1500)
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled !","success");
      document.title = 'TextUtils - LightMode';
    }
  }



  


  return (
    <>
    
    {/* <Navbar/> */}

    <Navbar  checkColor={checkColor} checkColor2={checkColor2} checkColor3={checkColor3} checkColor4={checkColor4} showAlert={showAlert} title="Textutils"  aboutText="about us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

   <div className="container my-3">

    <Form  title="Enter Text To Analyze" showAlert={showAlert} button="Click to uppercase" mode={mode}/>

    {/* <About/> */}
    
   </div>

    </>
  );
}

export default App;
