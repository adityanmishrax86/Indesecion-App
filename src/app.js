import React from 'react';
import ReactDOM from 'react-dom';
import IndecesionApp from './components/IndecesionApp';
import './styles/styles.scss';
// const Layout = (props) => {
//     return (
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     )
// }
//implicit class declaration
// const template = (
//     <div>
//         <h1>Page title</h1> 
//         <p>This is my page layout</p>
//     </div>
// )

/**
 * We can use childrens inside a react component in the reactDOM using props.children with a stateless component
 */
ReactDOM.render((
<IndecesionApp />), document.getElementById("app"));

//Using babel transform-class-properties plugin to use class methods using ES6 features

// class OldSyntax {
//     constructor() {
//         this.name = "MIkE";
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting() {
//         return `lol ${this.name}`;
//     }
// }  
// const old = new OldSyntax();
// const getGreeting = old.getGreeting;
// console.log(getGreeting());


/*
*New Version
*/

// class NewSyntax {
//      name = "Jen";
//      getGreeting = () => {
//         return `lol ${this.name}`;
//      }
// }
// const nee = new NewSyntax();
// const newGet = nee.getGreeting;
// console.log(newGet())  
  