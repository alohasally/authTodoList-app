// import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";

export default function MainNav() {
  const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;

  const StyledNavLink = styled.div`
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      color: var(--color-grey-600);
      font-size: 1.6rem;
      font-weight: bold;
      padding: 1.2rem 2.4rem;
      transition: all 0.3s;
    }
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      color: var(--color-grey--800);
      background-color: var(--color-grey-200);
    }

    & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
    }
    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-brand-600);
    }
  `;
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/">
            <HiOutlineCalendarDays />
            <span>TodoList</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <HiOutlineUser />
            <span>User</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
