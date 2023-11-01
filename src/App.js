  import { useState } from 'react';
  import './App.css';
  import NavBar from './components/NavBar';
  import TextForm from './components/TextForm';
  import About from './components/About';
  import Alert from './components/Alert';
  import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


  

  function App() {
    const[mode, setMode] = useState('light'); // whether dark mode is enabled or not
    const[alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
      setAlert({
       msg:message,
       type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }


    const toggleMode=()=>{
      if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // },2000); 
      // setInterval(() => {
      //   document.title ='Install TextUtils Now';
      // },1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
        document.title = 'TextUtils - Light Mode';
        }
      }

   return (
  <>
  <Router> 
    <NavBar title="TextUtils" aboutText="about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
    {/* /users --> Component 1
    /users/home --> Component 2 */}


    <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
</Routes>




     </div>
     </Router>
            
    </>
    );
  }

  export default App;
