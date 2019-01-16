import React, { Component } from "react";
import Users from "./Users";
import { UserEntity } from "./model/userEntity";
import "./App.css";

interface State {
  users: UserEntity[];
}

interface Props {}

class App extends Component<Props, State> {
  state = {
    users: [{ id: 1, name: "Cory" }, { id: 2, name: "Bob" }]
  };

  // handleClickDelete = id: Number => {
  //   this.setState(prevState => {
  //     return { users: [...prevState.filter(u => u.id !== id)] };
  //   });
  // };

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
