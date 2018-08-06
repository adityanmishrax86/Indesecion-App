/*
*Indecesion app : Without Components
*/
//JSX - Jasvascript XML
//object that holds data of the app
const app = {
    title:"Indecesion App",
    subtitle:"An App for anything",
    options:[]
  }
  
  //function that adds data to app.option array when we submit  
  const onFormSubmit = (e) => {
    e.preventDefault();
    //get the value of the input box from the name attribute
    const option = e.target.elements.option.value;
    if(option){
      app.options.push(option);
      e.target.elements.option.value = "";
      //we need to call the function for look the change of value
      createReactApp();
    }
  }
  
  //function that remove all items from the app.option
  const removeAll = (e) => {
    e.preventDefault();
    app.options = [];
    createReactApp();
  }
  
  //function that selects random option and alert them
  const selectOption = () => {
   let ranNum = Math.floor(Math.random() * app.options.length);
   let option = app.options[ranNum];
   alert(option);
  }
  
  //the constructor of the DOM
  const createReactApp = () => {
    const templateTwo = (
      <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
  
     
      {//If there are any options then it will show you the options or show no options
      }
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <ol>
       {
         //map the function and view the added items
         app.options.map((lol) => {
           return <li key={lol}>{ lol }</li>;
         })
       }
      </ol>
      
      <br />
      {
        //if app.option is empty i.e no items left the it will disable the button
      }
      <button disabled={app.options.length > 0 ? false : true} onClick={selectOption}>What should I Do?</button>
       
      <button onClick={removeAll}>RemoveAll</button>
      <br /><br />
      <form onSubmit = {onFormSubmit}>
        <input name="option" type="text"/>
        &nbsp;<button>Add</button> 
      </form>
      </div>
      
  );
  //function to render the data into the document
  ReactDOM.render(templateTwo,document.getElementById("app"));
  }
  
  createReactApp();
  
  /*
  *The JSX is not directly understood by browser. So we need to babel.
  *Babel converts the JSX to following react method that the browser can understand the compile it
  *But we don't use the following style to use REACT
  var template = React.createElement(
      "p",
      { id: "someId" },
      "Hello there"
    );
  */
  //render method requires two arguments 
  //first one is JSX element
  //second one is to where the component will be renderd in the html page
  