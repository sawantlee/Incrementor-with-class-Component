import React from "react";
import { Button_type } from "./constant";

class DecrementorButton extends React.Component{
    //handleClickDecrement = () => {this.props.handleProp(Button_type.DECREMENT)};

    render(){

        return(
            <button onClick={() => this.props.handleprop(Button_type.DECREMENT)}>Decrementor - </button>
        );

    }
}

export default DecrementorButton;