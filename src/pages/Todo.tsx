import TodoDetail from "@/features/todoList/TodoDetail";
import TodoList from "@/features/todoList/TodoList";
import { styled } from "styled-components";

export default function Todo() {
  const StyledDiv = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <StyledDiv>
      <TodoList />
      <TodoDetail />
    </StyledDiv>
  );
}
