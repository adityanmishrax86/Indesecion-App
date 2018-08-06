import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal'

/*
 * All react components are classes which can be
 * extended from React.Component
 * which needs a function render !important!
 */
//stateless functional components
/**
 * const User = (props) => {
 *  return (
 *  <div>
 *  <p>Name: {props.name} </p>
 *  <p>Age:</p>
 * );
 * };
 * 
 * ReactDOM.render(<User name="Aditya" />,document.getElementById("app"));
 */

class IndecesionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

    componentDidMount() {
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options)
        this.setState(() => ({ options }))
      } catch(e) {
        //Do Nothing
      }
     
    }
    componentDidUpdate(prevProps, prevState) {
      if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
        console.log("Component updated");
      }
     
    }
    //handles deleting options one by one
    handleDeleteOptions = (optionToRemove) => {
     this.setState((prevState) => ({
       options: prevState.options.filter((option) => optionToRemove !== option)
     }))
    }
    //handles the deleting of options
    handleDeleteOption = () => {
     this.setState(() => ({options:[]}));
    }
    //handles the remove of the modal 
    removeSelected = () => {
      this.setState(() => ({selectedOption : undefined}));
    }
    //handles the random pickingof the choice
    handlePick = ()=> {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const ops = this.state.options[randomNum];
      this.setState(() => ({selectedOption : ops}))
    }
    //handles adding options to the list
    handleAddOption = (option) => {
      //the option arg takes the value of the input box
      if (!option) {
        //if there is no option it will return this text
        return "Enter a valid option";
      } else if (this.state.options.indexOf(option) > -1) {
        //if the index return > -1 i.e 0 or something  it will return this text
        return "The option is alreay exits. Try another one";
      }
      //else as above two statements return some value so if they false then it will be work
      
      this.setState((prevState) => ({
        //here prevState.options is the React state's empty/filled array
          //we concat the option as an array to the prevState.options and updated it with updater
        options: prevState.options.concat(option)
      }))
    }
  
    render() {
      
      const subtitle = "Put your life in a hands of a Computer";
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick} //the method of parent class becomes prop of the child component
          />
          <Options
            options={this.state.options}
            handleDeleteOption={this.handleDeleteOption} 
            handleDeleteOptions={this.handleDeleteOptions}//the method of parent class becomes prop of the child component
          />
          <AddOption handleAddOption={this.handleAddOption} />
          <OptionModal removeSelected={this.removeSelected} selectedOption={this.state.selectedOption}/>
        </div>
      );
    }
  }
  
export default IndecesionApp;



