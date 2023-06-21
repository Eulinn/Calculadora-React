import React from "react";
import "./keyboard.css";


export default class Keyboard extends React.Component{
    render(){
        return(
            <div className="ContainerKeyboard">
                {this.props.children}
            </div>
        )
    }
}