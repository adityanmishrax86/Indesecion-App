import React from 'react';
import Option from './Option';

  const Options = (props) => (
      <div>
      {props.options.length === 0 && <p>Please add an option</p>}
      <button onClick={props.handleDeleteOption}>Remove All</button>
      {//jaha bi tame map kariba you have to add uniwue key attribute too that component
      props.options.map(val => <Option 
        key={val}
         optionText={val} 
         handleDeleteOptions = {props.handleDeleteOptions}
         />)}
    </div>
    );
  
  export default Options;