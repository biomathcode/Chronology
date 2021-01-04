import React,{ Component} from 'react';
import {useEffect, useState} from 'react';
import Papa from 'papaparse';
import './App.css'
import {useTransition, animated} from 'react-spring';
import {SimpleAnimation} from './animations/simple'

function App() {
  const [data, setData] = useState(false)
  const [toggle, setToggle] = useState(false);
  const transitions = useTransition(toggle, null, {
    enter: {opacity: 1},
    leave: {opacity: 0},
  })
  return (
    <div>
      {/* <button onClick={() => setData(!data)}></button>
      {!data && 
      <animated.div className="rectangle">
      </animated.div>}  
      {transitions.map(({ item, props, key}) => 
      item
        ?<animated.div style={props}>😄</animated.div>
        :<animated.div style={props}>🤪</animated.div>
      )} */}
      <SimpleAnimation/>
    </div> 
  )
}

export default App;
