import { Course } from "../model/course";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export const getCourses = (): Promise<Course[]> => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Network response was no ok.");
    })
    .catch(handleError);
};

export const deleteCourse = (id: Number): Promise<void> => {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(response => {
      if (response.ok) return;
      throw new Error("Network response was not ok.");
    })
    .catch(handleError);
};
