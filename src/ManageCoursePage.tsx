import React, { Component, ChangeEvent } from "react";
import Courses from "./Courses";
import { Course } from "./model/course";
import { Author } from "./model/author";
import { saveCourse } from "./api/courseApi";
import { getAuthors } from "./api/authorApi";
import CourseForm from "./CourseForm";

// Specify that this component doesn't accept children as a prop
type Props = {
  // children?: never;
};

const initialState = {
  course: {
    id: undefined,
    title: "",
    slug: "",
    authorId: undefined,
    category: ""
  },
  authors: [],
  saving: false,
  errors: {}
};

// Marking readonly protects from accidentally changing
type State = Readonly<typeof initialState>;

class ManageCoursePage extends Component<Props, State> {
  // readonly is optional, but helps protect against accidental mutations.
  state: State = initialState;

  componentDidMount() {
    getAuthors().then(authors => this.setState({ authors } as State));
  }

  handleSave = () => {
    saveCourse(this.state.course);
  };

  render() {
    return (
      <CourseForm
        onTextInputChange={({ target }) =>
          this.setState(state => ({
            ...state,
            course: { ...state.course, [target.name]: target.value }
          }))
        }
        onSave={this.handleSave}
        errors={this.state.errors}
        saving={this.state.saving}
        course={this.state.course}
        authors={this.state.authors}
        onSelectChange={({ target }) =>
          this.setState(state => ({
            ...state,
            course: { ...state.course, [target.name]: target.value }
          }))
        }
      />
    );
  }

  // private handleSelectChange = () =>
  //   this.setState(handleSelectInputChange(event));
}

// Extracted state update functions to a pure function outside the class so they can be tested in isolation.
const handleTextInputChange = (
  event: ChangeEvent<HTMLFormElement>,
  prevState: State
) => ({ [event.target.name]: event.target.value });

const handleSelectInputChange = (
  event: ChangeEvent<HTMLSelectElement>,
  prevState: State
) => ({ [event.target.name]: event.target.value });

export default ManageCoursePage;
