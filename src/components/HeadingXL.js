import styled from 'styled-components';

export default styled.h1`
  display: block;
  margin: 0 auto 10vh auto;
  font-size: 70px;
  line-height: 1.2;
  text-align: center;
  font-weight: 1000;
  letter-spacing: -4px;
  background: -webkit-linear-gradient(
    240deg,
    hsl(100, 10%, 25%),
    hsl(100, 10%, 25%),
    hsl(100, 10%, 25%),
    hsl(100, 10%, 25%),
    hsl(100, 10%, 25%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 45px;
  }
`;
