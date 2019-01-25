import { Author } from "../model/author";
import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "/authors/";

export const getAuthors = (): Promise<Author[]> => {
  return fetch(baseUrl)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error("Network response was no ok.");
    })
    .catch(handleError);
};
