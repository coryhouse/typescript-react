import { Course } from "../model/course";

export const getCourses = (): Promise<Course[]> => {
  const url = process.env.REACT_APP_API_URL + "/courses";
  debugger;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was no ok.");
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};
