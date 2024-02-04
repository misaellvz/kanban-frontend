import { Button, Input } from "components";
import { Formik } from "formik";
import { loginSchema } from "./schema";
import AuthService from "services/auth.service";
import { useNavigate } from "react-router-dom";
import { useAuthUserContext } from "hooks/contexts";
import { useMutation } from "@tanstack/react-query";
import { User } from "interfaces/user";

const StylesCss = {
  buttonActive:
    "text-white-A700 bg-orange-900 hover:bg-orange-500 transition-colors 300 hover:text-white-A700",
  buttonDisabled: "cursor-not-allowed bg-gray-600/40 text-gray-900/60",
};

interface FormData {
  username: string;
  password: string;
}

function Form() {
  const navigate = useNavigate();
  const { login } = useAuthUserContext();

  const { mutate } = useMutation<User, unknown, FormData>({
    mutationFn: (form) => AuthService.login(form),
    onSuccess: (user) => {
      login(user);
      navigate("/home");
    },
  });

  return (
    <Formik<FormData>
      initialValues={{ username: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(value) => mutate(value)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} className="px-5">
          <div className="flex flex-col gap-4 items-start justify-start w-full py-4">
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
              <Input
                name="username"
                placeholder="Ingrese su Usuario"
                className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                value={formik.values.username}
                errors={formik.errors.username}
                onChange={formik.handleChange}
              ></Input>
              <Input
                type="password"
                name="password"
                placeholder="Ingrese su Contraseña"
                className="md:h-auto p-0 placeholder:text-gray-600 sm:h-auto text-base text-left w-full"
                wrapClassName="sm:flex-1 w-[49%] sm:w-full"
                value={formik.values.password}
                errors={formik.errors.password}
                onChange={formik.handleChange}
              ></Input>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                className={`${
                  formik.isValid
                    ? StylesCss.buttonActive
                    : StylesCss.buttonDisabled
                } font-medium text-base text-center w-full p-3 bg-sky-600 rounded`}
                color="blue_gray_100"
              >
                Ingresar
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Form;
