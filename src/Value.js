import React from "react";

class Value extends React.Component{
    render(){
        const {value} = this.props;
        return(
            <p>Latest value is :{value}</p>
        );
    }
}


export default Value;