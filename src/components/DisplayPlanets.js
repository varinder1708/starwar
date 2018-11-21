import React, { Component } from "react";
import "../App.css";
class DisplayPlanets extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Planet</th>
            <th>Population</th>
          </tr>
          {this.props.data.map(function(data) {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.population}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default DisplayPlanets;
