import { USER_KEY } from "consts";
import { User } from "interfaces/user";

export function getAuthenticatedUser(): User | null {
  const authenticatedUser = JSON.parse(
    localStorage.getItem(USER_KEY) ?? "null"
  );
  return authenticatedUser;
}

export function setAuthenticatedUser(authenticatedUser: User): void {
  localStorage.setItem(USER_KEY, JSON.stringify(authenticatedUser));
}
