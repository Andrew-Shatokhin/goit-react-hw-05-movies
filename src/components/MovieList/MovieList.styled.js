import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  list-style: none;

`;

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
      -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
      12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
      -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 500px;
  object-fit: cover;

`;

export const Title = styled.h2`
  text-align: center;
`
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);
`;
