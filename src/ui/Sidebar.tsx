import { styled } from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <Logo />*/}
      <h1>T</h1>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
