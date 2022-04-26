import styled from "styled-components";

const Button = styled.button`
  font-size: 18px;
  font-family: SamsungSharpSansBold;
  padding: 18px 32px;
  margin-right: 25px;
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default Button;
