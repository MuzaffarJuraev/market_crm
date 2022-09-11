import styled from "styled-components";

const StyledConta = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 60px auto;
`;

export default function Container(props) {
  return <StyledConta>{props.children}</StyledConta>;
}
