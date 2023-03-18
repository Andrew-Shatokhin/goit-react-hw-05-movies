import styled from 'styled-components';


export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;


export const Input = styled.input`
  padding: 13px 20px;
  width: 700px;
  border-radius: 4px;
  font-size: 18px;
  border: 1px solid orangered;

  :focus {
    box-shadow: 0px 0px 0px 1px white;
  }
`;
export const SearchFormButton = styled.button`
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


