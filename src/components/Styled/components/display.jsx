import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(${props => props.minMax ? props.minMax : "280px, 1fr"}));
  grid-auto-rows: auto;
  ${props => props.padding ? "padding: "+props.padding+";" : ""}
  ${props => props.gridGap ? "grid-gap: "+props.gridGap+";" : ""}
  
`
export const GridTwoColumn = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
  grid-template-rows: auto;
  grid-gap: 10px;
  width: 100%;
`
export const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
  ${props => props.padding ? "padding: "+props.padding+";" : ""}
  ${props => props.color ? "color: "+props.color+" ;" : ""}
  ${props => props.borderTop ? "border-top: "+props.alignItems+";" : ""}
  ${props => props.alignItems ? "align-items: "+props.alignItems+";" : ""}
`
export const FlexItemSvg = styled.div`
  position: relative;
  margin: 0px 4px;
  svg{
    fill: ${props => props.fill ? props.fill : "#B7BBC4"};
    width: 20px;
  }
`