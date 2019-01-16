import React from "react";
import { UserEntity } from "./model/userEntity";

interface Props {
  users: UserEntity[];
  onClickDelete: Function;
}

export const Users: React.StatelessComponent<Props> = props => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {props.users.map(u => (
          <li key={u.id}>
            {u.name}{" "}
            <button onClick={() => props.onClickDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
