import { object, string } from "yup";

export const loginSchema = object({
  username: string().required("El nombre de usuario es requerido"),
  password: string().required("La contraseña es requerida"),
});
