import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
  margin-left: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);

  > nav {
    display: flex;
  }
`;

