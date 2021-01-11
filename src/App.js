import React,{ useState} from 'react';
import './App.css'
import Form from './Components/Form';
import Fetchingdata from './api/Fetchingwithhooks';
import Logo from "./asserts/Logo.svg"
function App() {
  const [url, setUrl] = useState("")
  const [lock, setLock ] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();
    setLock(true);
  }
  const HandleDemo = () => {
    setUrl('https://docs.google.com/spreadsheets/d/e/2PACX-1vQjRhSKvrWv4EqvhoBT7G1yK_yyo_LssOGyon90pP1bweKuVpBW_UqsEtTfqxViL38Ue_LCLoi2lTwx/pub?output=csv');
    setLock(!lock);
  }
  return (
    <div >
      <div style={{textAlign:'center', margin: "10px"}}>
        <img src={Logo} width="100px" height="100px" alt="logo"/>
      </div>
      <Form url={url} setUrl={setUrl} SubmitHandler={SubmitHandler} lock={lock} setLock={setLock}/>
      <button type="button" onClick={HandleDemo}>Demo</button>
      {!lock && <div>
      <h3>
      Chronology - create your own Chronology with the googlesheet- 
      </h3>
      <ul>
      column names
      <li>
        Year
      </li>
      <li>
          Image
      </li>
      <li>
        Description
      </li>
      </ul>
      <article>
        <h3> how it works</h3>
        <p>Basically fetching the csv data from the googlesheet and displaying it on the webpage in a prettiest/Organised way possible. I mean that's what most app are displaying data in an organised and beautiful way. </p> 
      </article>
      <section>
        <h3>Front-end Stack</h3>
        <ul>
          <li>
            React - Front end framework
          </li>
          <li>
            React-Reveal for the animationed reveal of images and create an illusion of flow on the web-page. 
          </li>
          <li>
            Drag and Drop - To Do 
          </li>
          <li>
            I still have to decided on what css framework to use for this, or should I even use anyone - No one seems the right fit for the project. But I can't keep writing css that is just a drag...  
          </li>
        </ul>
      </section>
      <section>
        <h3>Backend Stack</h3>
        <ul>
          <h4>Current Stack </h4>
          <li>
            GoogleSheets 
            <ul>
              <h5> PROS</h5>
              <li> Good for experimenting the front-end</li>
              <li>ITS FREE</li>
              <li>Everyone know how to use it</li>
            </ul>
            <ul>
              <h5>Cons</h5>
              <li>Not Scalable</li>
              <li>Bad UI/UX - that the user have to go to another website</li>
            </ul>
          </li>
        </ul>
        <ul>
          <h4>Shifting to </h4>
          <li>
            Database- MONGODB/ or SQL - Still to decide on that
          </li>
          <li>
            Auth- with passport or Oauth - simple, decided
          </li>
          <li>
            Query- GRAPH-QL- it's fun, simple, would reduce /request API calls 
          </li>
          <li>
            Server- Express 
          </li>
          <li>
            Image Resizing - Learn this shit on the go... 
          </li>
          <li>
            Hosting- Heroku then move on to AWS...
          </li>
        </ul>
      </section>
      </div> 
      }
      {lock && <Fetchingdata 
      url={url} 
      /> } 
    </div> 
  )
}

export default App;
