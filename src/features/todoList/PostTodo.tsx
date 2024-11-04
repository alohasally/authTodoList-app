import { useForm } from "react-hook-form";

import Form from "@/ui/Form";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import { usePostTodo } from "./usePostTodo";
import { TodoNew } from "@/types/todo";

export default function PostTodo() {
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<TodoNew>({
      defaultValues: {
        title: "",
        content: "",
      },
    });

  const { postNewTodo, isPosting } = usePostTodo();

  const onsubmit = (data: TodoNew) => {
    postNewTodo(data);
    isPosting;
  };
  return (
    <div>
      <Form type="regualar" handleSubmit={onsubmit}>
        <FormRow label="Title" error="">
          <Input
            type="text"
            id="title"
            disabled=""
            {...register("title", { required: "This field required" })}
          />
        </FormRow>
        <FormRow label="Content" error="">
          <textarea id="content" />
        </FormRow>
      </Form>
    </div>
  );
}
