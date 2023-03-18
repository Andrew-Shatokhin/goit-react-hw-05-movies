import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const GoBackButton = styled.button`
  display:flex;
  margin-bottom:20px;
  padding: 8px 14px;
  font-weight: 400;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: orangered;
  transition: all 200ms ease-in-out;

  cursor: pointer;
  :hover,
  :focus {
    color: orangered;
    background-color: white;
    border: 1px solid orangered;
  }

`;
export const LinkButton = styled(NavLink)`
  text-decoration: none;
`;

export const Span = styled.span`
  margin-left: 20px;
`;

export const MovieBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

`;
