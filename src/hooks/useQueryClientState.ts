import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function useQueryClientState() {
  const queryCache = new QueryCache({
    onError: (error) => {
      alert(error);
    },
  });
  const mutationCache = new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      if (mutation.options.onSuccess) return;
      alert("Realizado Satisfactoriamente");
    },
    onError: (error, _variables, _context, mutation) => {
      if (mutation.options.onError) return;
      alert(error);
    },
  });

  const [queryClient] = useState(
    () => new QueryClient({ queryCache, mutationCache })
  );
  return queryClient;
}
