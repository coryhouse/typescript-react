import React, { Component } from "react";
import Users from "./Users";
import { UserEntity } from "./model/userEntity";
import { getUsers } from "./api/userApi";
import "./App.css";

interface State {
  users: UserEntity[];
}

interface Props {}

class App extends Component<Props, State> {
  state = {
    users: []
  };

  componentDidMount() {
    getUsers().then(users => this.setState({ users }));
  }

  handleClickDelete = (id: Number): void => {
    this.setState(state => ({ users: state.users.filter(u => u.id !== id) }));
  };

  render() {
    return (
      <div className="App">
        <Users
          users={this.state.users}
          onClickDelete={this.handleClickDelete}
        />
      </div>
    );
  }
}

export default App;
