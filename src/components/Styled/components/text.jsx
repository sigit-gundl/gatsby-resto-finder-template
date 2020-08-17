import styled from "styled-components";

// Text
export const TextAlign = styled.div`
  position: relative;
  text-align: ${props => props.textAlign ? props.textAlign : ""};
  ${props => props.padding ? "padding: "+props.padding+";" : ""};
`
export const Paragraph = styled.p``;
export const Strong = styled.strong`
  text-align: ${props => props.textAlign ? props.textAlign : ""};
`;
export const Header1 = styled.h1``;
export const Header2 = styled.h2``;
export const Header3 = styled.h3`
  ${props => props.margin ? "margin: "+props.margin+";" : ""};
`;
export const SpaceBr = styled.br``;