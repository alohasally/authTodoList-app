import { postNewTodo as postNewTodoApi } from "@/services/apiTodos";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const usePostTodo = () => {
  const queryClient = useQueryClient();

  const { mutate: postNewTodo, isLoading: isPosting } = useMutation({
    mutationFn: postNewTodoApi,
    onSuccess: () => {
      toast.success("새로운 할일이 등록되었습니다");
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    // onError: (err) => toast.error(err.message),
  });
  return { postNewTodo, isPosting };
};
