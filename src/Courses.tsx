import React from "react";
import { Course } from "./model/course";
import { NavLink } from "react-router-dom";

interface Props {
  // Instead of import above, could use TypeScript's import() syntax, but in this case no value add since only types in the model file
  // More info here: https://davidea.st/articles/typescript-2-9-import-types
  //courses: import("./model/course").Course[];
  courses: Course[];
  onClickDelete: Function;
}

export const Courses: React.FC<Props> = props => {
  return (
    <>
      <h1>Courses</h1>
      <ul>
        {props.courses.map(c => (
          <li key={String(c.id)}>
            <button onClick={() => props.onClickDelete(c.id)}>Delete</button>{" "}
            <NavLink to={`/course/${c.slug}`}>{c.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
