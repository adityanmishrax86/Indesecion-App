import React from 'react';


  const Option = (props) => (
      <div>
          <ul>
            <li>{props.optionText} <button onClick={(e) => {props.handleDeleteOptions(props.optionText)}}>X</button></li>
          </ul>
        </div>
    );
  

  export default Option;
  