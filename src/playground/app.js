/**
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
  constructor(props) {
    super(props);

    //the methods that binds this
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //React state to work with the options
    this.state = {
      options: props.options
    };
  }
  
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
  handleDeleteOptions(optionToRemove) {
   this.setState((prevState) => ({
     options: prevState.options.filter((option) => optionToRemove !== option)
   }))
  }
  //handles the deleting of options
  handleDeleteOption() {
   this.setState(() => ({options:[]}));
  }
  //handles the random pickingof the choice
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const ops = this.state.options[randomNum];
    alert(ops);
  }
  //handles adding options to the list
  handleAddOption(option) {
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
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
  );
}
Header.defaultProps = {
  title : 'Indesecion App'
}

IndecesionApp.defaultProps = {
   options: []
}

const Action = (props) => {
  return (
    <div>
    <button
      disabled={props.hasOptions ? false : true}
      onClick={props.handlePick} //accessing the prop from the component
    >
      What should i do
    </button>
  </div>
  );
}


const Options = (props) => {
  return (
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
  )
}
const Option = (props) => {
  return (
    <div>
        <ul>
          <li>{props.optionText} <button onClick={(e) => {props.handleDeleteOptions(props.optionText)}}>X</button></li>
        </ul>
      </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {error: undefined};
  }

  handleAddOption(e) {
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

ReactDOM.render(<IndecesionApp options={["one"]}/>, document.getElementById("app"));
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


