import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100px;
  margin: 20px 45px;
`;

export const Input = styled.input`
  border: 2px solid #ccc;
  padding: 10px;
  font-size: 16px;
  flex: 1;
  border-radius: 4px;
  transition: border 0.3s ease;
  &:hover {
    border: 2px solid #f39c1c;
  }
  &:focus {
    outline: none;
    border: 2px solid #f39c1c;
  }
`;

export const Button = styled.button`
  background-color: #f39c1c;
  border: none;
  color: white;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #818080;
  }
`;
