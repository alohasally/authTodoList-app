import { styled } from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

function Header() {
  return (
    <StyledHeader>
      <h2>To Do List</h2>
      <h4>Login</h4>
    </StyledHeader>
  );
}

export default Header;
