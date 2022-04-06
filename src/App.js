import logo from './logo.svg';
import './App.css';
import React from 'react';
import Incrementor from './Incrementor';
import Value from './Value';
import DecrementorButton from './DecrementButton';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component{
  constructor(){
    super();
    this.state ={
        value : 0
    }
}


  handleCalc = (type) => {
  //console.log(type);  
  let updatedValue = this.state.value;
  if (type === 'INCREMENT'){
       updatedValue++; 
  }
    else{
      updatedValue--;
    }
    this.setState({
      ...this.state, 
      value: updatedValue
    })
  }
  
  render(){
    const {value} = this.state;
    return(
      <>
      <Incrementor handleProp = {this.handleCalc}/>
      <Value value = {value}/>
      <DecrementorButton handleprop = {this.handleCalc}/>
      </>
    );
  }
}
export default App;
