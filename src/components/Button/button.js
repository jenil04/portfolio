import React from "react"
import styled from "styled-components"

const Button = () => {
  return (
    <ButtonWrapper>
      Read 👉🏻
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  border: 1.5px solid #aaa;
  border-radius: 36px; 
  -moz-border-radius: 36px; 
  -webkit-border-radius: 36px; 
  background-color: transparent;
  text-transform: uppercase;
  font-size: 0.60rem;
  letter-spacing: 2px;
  padding: 0.75rem 1rem;
  display: flex;
  font-weight: 400;
  font-family: "FontBold";
  transition: 0.3s;
  color: #fff;
  text-decoration: none;

  .arrow {
    align-self: center;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #3a3a3a;
    border-color: #3a3a3a;
    color: #fff;
  }
`

export default Button
