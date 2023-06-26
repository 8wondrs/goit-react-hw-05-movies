import { Outlet } from 'react-router-dom';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled.jsx';

export const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </LinkWrapper>
        </HeaderWrapper>
      </NavBar>
      <Outlet />
    </>
  );
};
