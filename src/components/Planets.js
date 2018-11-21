import React, { Component } from "react";
import DisplayPlanets from "./DisplayPlanets";
class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = { planets: [] };
  }
  SearchPlanets = character => {
    fetch("https://swapi.co/api/planets")
      .then(response => response.json())
      .then(data => {
        var filterresult = [];
        data.results.map(function(obj) {
          if (obj.name.toLowerCase().indexOf(character.toLowerCase()) > -1) {
            filterresult.push(obj);
          }
        });
        this.setState({ planets: filterresult });
      });
  };

  onKeyPress = e => {
    this.SearchPlanets(e.target.value);
  };
  render() {
    var display_planets = <DisplayPlanets data={this.state.planets} />;
    return (
      <div>
        <input
          type="text"
          placeholder="Planet"
          name="planets"
          onKeyUp={this.onKeyPress}
        />
        {this.state.planets.length > 0 ? display_planets : ""}
      </div>
    );
  }
}

export default Planets;
