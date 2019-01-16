import { UserEntity } from "../model/userEntity";
import { users } from "./mockData";

export const getUsers = (): Promise<UserEntity[]> => {
  return Promise.resolve(users);
};
