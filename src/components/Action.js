import React from 'react';

const Action = (props) =>  (
      <div>
      <button
        disabled={props.hasOptions ? false : true}
        onClick={props.handlePick} //accessing the prop from the component
      >
        What should i do
      </button>
    </div>
    );
  
  
  export default Action;