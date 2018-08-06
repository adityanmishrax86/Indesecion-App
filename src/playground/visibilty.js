class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility : false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            //as per REACT new versions we will use updater object in setState.... so inside a return we will access the 
            //proprty of the state object inside a {} setting its value with the state accesing arguments
            return {
                visibility : !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
            <h1>Visibity Status</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? "Hide Status" : "Show Status"}
            </button>
            
        {this.state.visibility && (<div><p>Heyy I have something for you</p></div>)  
            }
               </div>
        )
    }
}

ReactDOM.render(<Visibility />,document.getElementById("app"));
























// let visibility = false;
// const makeSomeNoise = () =>{
//     visibility = !visibility;
//     showitems();
// }
// const showitems = () => {
   
//     const template = (
//         <div>
//             <h1>Visibity Status</h1>
//             <button onClick={makeSomeNoise}>
//             {visibility ? "Hide Status" : "Show Status"}
//             </button>
           
//             {
//             visibility && (<div><p>Heyy I have something for you</p></div>)  
//             }
//         </div>
//     );

//     ReactDOM.render(template,document.getElementById("app"));
// }
// showitems();
