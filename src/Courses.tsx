import React from "react";
import { Course } from "./model/course";

interface Props {
  courses: Course[];
  onClickDelete: Function;
}

export const Courses: React.StatelessComponent<Props> = props => {
  return (
    <>
      <h1>Courses</h1>
      <ul>
        {props.courses.map(c => (
          <li key={String(c.id)}>
            {c.title}{" "}
            <button onClick={() => props.onClickDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
