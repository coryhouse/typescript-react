import React from "react";
import Courses from "./Courses";
import { Course } from "./model/course";
import { getCourses } from "./api/courseApi";
import "./App.css";

interface State {
  courses: Course[];
}

// Specify that this component doesn't accept children as a prop
interface Props {
  // children?: never;
}

class App extends React.Component<Props, State> {
  // readonly is optional, but helps protect against accidental mutations.
  readonly state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ courses }));
  }

  handleClickDelete = (id: Number): void => {
    this.setState(state => ({
      courses: state.courses.filter(c => c.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <Courses
          courses={this.state.courses}
          onClickDelete={this.handleClickDelete}
        />
      </div>
    );
  }
}

export default App;
