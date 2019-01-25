import React from "react";
import Courses from "./Courses";
import { Course } from "./model/course";
import { getCourses, deleteCourse } from "./api/courseApi";
import { Switch, Route, NavLink } from 'react-router-dom';
import "./App.css";
import ManageCoursePage from './ManageCoursePage';

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
    deleteCourse(id).then(() => {
      this.setState(state => ({
        courses: state.courses.filter(c => c.id !== id)
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/course">Course</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact render={() => 
            <Courses
              courses={this.state.courses}
              onClickDelete={this.handleClickDelete}
            />
          }/>
          <Route path="/course" component={ManageCoursePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
