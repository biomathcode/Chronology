import React,{ useState} from 'react';

import './App.css'
import Form from './Components/Form';
import Fetchingdata from './api/Fetchingwithhooks';
function App() {
  const [url, setUrl] = useState("")
  const [lock, setLock ] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();
    setLock(true);
  }
  return (
    <div >
      <Form url={url} setUrl={setUrl} SubmitHandler={SubmitHandler} lock={lock}/>
      {lock && <Fetchingdata 
      url={url} 
      /> } 
    </div> 
  )
}

export default App;
