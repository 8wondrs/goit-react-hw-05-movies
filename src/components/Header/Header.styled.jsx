import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  padding: 30px 0;
  background-color: #032852bf;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: orange;
  }

  &.active {
    color: orange;
    pointer-events: none;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #2196f3;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
  }

  &:active {
    background-color: #1565c0;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 45px;
`;
