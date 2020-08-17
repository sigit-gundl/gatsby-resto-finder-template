import styled from 'styled-components'

export const JustifyCenter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`
export const VerticalMiddle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`
export const FillSpace = styled.span`
  width: 100%;
`
export const FlexItem = styled.div`
  position: relative;
  padding: ${props => props.padding ? props.padding : "0 4px"};
  ${props => props.background ? "background: "+props.background+";" : ""};
  ${props => props.borderRadius ? "border-radius: "+props.borderRadius+";" : ""};
  ${props => props.margin ? "margin: "+props.margin+";" : ""};

`
export const FlexItemText = styled.strong`
  ${props => props.size ? "font-size: "+props.size+";" : ""};
  ${props => props.width ? "width: "+props.width+" !important;" : ""}
  ${props => props.minWidth ? "min-width: "+props.minWidth+" !important;" : ""}
  @media (max-width: 408px) {
    ${props => props.none ? "display: none;" : ""}
  }
`
export const Brand = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #666;
  padding: 8px 0;
  font-size: 28px;
`
