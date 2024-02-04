import React from "react";
import Routes from "./Routes";
import { AuthUserProvider } from "contexts/AuthUserContext";
import { QueryClientProvider } from "@tanstack/react-query";
import useQueryClientState from "hooks/useQueryClientState";

function App() {
  const queryClient = useQueryClientState();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthUserProvider>
        <Routes />
      </AuthUserProvider>
    </QueryClientProvider>
  );
}

export default App;
