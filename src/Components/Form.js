import React,{useState} from 'react';
import './Form.css';
const Form = ({url, setUrl, SubmitHandler, lock}) =>{

  const handlechange = (e) => {

  }
    return (
        <div className="container">
        {!lock && 
      <form className="form" >

        <input 
        type="text" 
        name="url"
        onChange={e => setUrl(e.target.value)}
        value={url}
        placeholder="paste your googlesheeturl"

        />
        <button type="submit" onClick={SubmitHandler}>submit</button>
      </form>
      }
        </div>
    )
}


export default Form;