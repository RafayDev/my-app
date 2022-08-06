import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
<Navbar mode={mode} toggleMode={toggleMode}/>
<div className="container">
<TextForm heading="Enter Your Text to Analyze" mode={mode}/>
</div>
{/* <About/> */}

</>
  );
}

export default App;
