import { getTodos } from "@/services/apiTodos";
import { useQuery } from "react-query";

export const useGetTodos = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  return { isLoading, data, error };
};
