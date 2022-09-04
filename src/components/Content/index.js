import styled from "styled-components";

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export default function Content(props) {
  return <StyledContent>{props.children}</StyledContent>;
}
