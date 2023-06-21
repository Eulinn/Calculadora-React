import React from "react";
import "./display.css";


export default class Display extends React.Component{
    render(){
        return(
            <div className="ContainerDisplay">
                <p>{this.props.text}</p>
            </div>
        )
    }
}