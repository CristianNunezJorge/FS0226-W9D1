// Il nosatro primo Class component, più potente dei functional components

// Component è la clasee principale dei Class components che viene poi estesa dai Nostri Class components
import { Component } from "react";

const first = " Latte";
const second = "Caggè";
const third = "Biscotti";

//  Il nome della classe determina il nome del component
class List extends Component {
  render() {
    return (
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
        <li>{this.props.item}</li>
      </ul>
    );
  }
}

// Solito export
export default List;
