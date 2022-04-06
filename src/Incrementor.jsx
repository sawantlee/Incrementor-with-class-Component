import React from 'react';
import {Button_type} from './constant';

class Incrementor extends React.Component{
  
    handleClick = () => {this.props.handleProp(Button_type.INCREMENT)};

    render(){
        return(
            <button onClick={this.handleClick} >Incrementor +</button>
        );
    }
}


export default Incrementor;

