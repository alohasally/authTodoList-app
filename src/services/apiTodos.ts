import {
  ResDeleteTodo,
  ResTodoItem,
  ResTodoList,
  TodoItem,
  TodoNew,
} from "@/types/todo";
import axios from "axios";

const API_URL = "http://localhost:8080/todos";
const token = localStorage.get("token");

//할 일 목록 조회
export const getTodos = async () => {
  const { data } = await axios.get<ResTodoList>(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//ID로 할 일 조회
export const getTodoById = async (id: string) => {
  const { data } = await axios.get<ResTodoItem>(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//새 할 일 추가
export const postNewTodo = async (todo: TodoNew) => {
  const { data } = await axios.post(API_URL, todo, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//할 일 수정
export const updateTodo = async ({ id, title, content }: TodoItem) => {
  const { data } = await axios.put(
    `${API_URL}/${id}`,
    {
      title,
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

//할 일 삭제
export const deleteTodo = async (id: string) => {
  const { data } = await axios.delete<ResDeleteTodo>(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
