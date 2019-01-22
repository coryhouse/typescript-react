import React from "react";
import TextInput from "./TextInput";
import { Course } from "./model/course";
import { Author } from "./model/author";
import SelectInput from "./SelectInput";

type Errors = {
  author?: string;
  category?: string;
  onSave?: string;
  title?: string;
};

type Props = {
  authors: Author[];
  course: Course;
  errors: Errors;
  onSave(event: React.ChangeEvent<HTMLFormElement>): any;
  onTextInputChange(event: React.ChangeEvent<HTMLInputElement>): any;
  onSelectChange(event: React.ChangeEvent<HTMLSelectElement>): any;
  saving: boolean;
};

const CourseForm: React.FC<Props> = ({
  course,
  authors,
  onSave,
  onTextInputChange,
  onSelectChange,
  saving = false,
  errors
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onTextInputChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map(author => new Option(author.name, author.name))}
        onChange={onSelectChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onTextInputChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CourseForm;
