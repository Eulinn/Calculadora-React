import React from "react";
import "./button.css";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className="ContainerButton"
        style={{ backgroundColor: this.props.Number ? "#181818" : "#0e0e0e" }}
        onClick={() => {
          if(!this.props.Number || this.props.Element === ','){
            this.props.HandleClick(this.props.Element);
            return
          }

        }}
      >
        {this.props.Element}
      </div>
    );
  }
}
