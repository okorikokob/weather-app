import styled from "styled-components"

const Button = ({text,onclick, backgroundColor, color}) => {
  return (
    <div><ButtonStyle bg={backgroundColor} textColor={color} onClick={onclick}>{text}</ButtonStyle></div>
  )
}

export default Button

const ButtonStyle = styled.button`
  padding: 10px 16px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.textColor};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #3c8b5e;
  }
`;