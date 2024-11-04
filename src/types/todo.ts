export interface TodoNew {
  title: string;
  content: string;
}

export interface TodoItem {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResTodoList {
  data: TodoItem[];
}

export interface ResTodoItem {
  data: TodoItem;
}

export interface ResDeleteTodo {
  data: null;
}
