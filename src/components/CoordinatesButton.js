import React from "react";

class CoordinatesButton extends React.Component {
    
    handleClick = (event) => {
        console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      }

    render() {
        return <button onClick={this.handleClick}>Coordinates Button</button>
    }
}
export default CoordinatesButton;