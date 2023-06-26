import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li``;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Image = styled.img`
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
`;

export const Title = styled.h3`
  width: 260px;
  text-align: center;
  margin: 0 auto;
`;
