import React from "react";
import Users from "./Users";
import { UserEntity } from "./model/userEntity";
import { getUsers } from "./api/userApi";
import "./App.css";

interface State {
  users: UserEntity[];
}

// Specify that this component doesn't accept children as a prop
interface Props {
  // children?: never;
}

class App extends React.Component<Props, State> {
  // readonly is optional, but helps protect against accidental mutations.
  readonly state = {
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
