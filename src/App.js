import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.componenet";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((monsterFeatures) => this.setState({ monsters: monsterFeatures }));
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input type="search" placeholder="search for monster"></input>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
