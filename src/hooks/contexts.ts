import { useContext } from "react";

import { AuthUserContext } from "contexts/AuthUserContext";

export const useAuthUserContext = () => useContext(AuthUserContext);
