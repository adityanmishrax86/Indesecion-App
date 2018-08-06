import React from 'react';

  class AddOption extends React.Component {
    state = {error: undefined};
    
    handleAddOption = (e) => {
      e.preventDefault();
      const val = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(val);
  
      if(error){
        e.target.elements.option.value = "";
      }
      e.target.elements.option.value = "";
  
    this.setState(() => ({error}));
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add</button>
          </form>
        </div>
      );
    }
  }
  
  export default AddOption;