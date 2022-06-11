import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          key: 1,
          name: "Atul",
        },
        {
          key: 2,
          name: "Chhotu",
        },
        {
          key: 3,
          name: "Jacky",
        },
        {
          key: 4,
          name: "Askary",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.key}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
