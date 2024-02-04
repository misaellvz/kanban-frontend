import { ListRequest } from "interfaces/request";
import { User } from "interfaces/user";
import axios from "./axios";

const endpoint = "/users/";

async function getUsers({ params, signal }: ListRequest): Promise<User[]> {
  return axios.get<undefined, User[]>(endpoint, {
    data: {},
    params,
    signal,
  });
}

const UserService = {
  getUsers,
};

export default UserService;
