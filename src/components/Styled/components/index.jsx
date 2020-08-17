import styled from "styled-components";

// Search Container
export const Form = styled.form`
    position: relative;
    margin: ${ props => props.active ? "0" : "20px" } auto;
    border-radius: 8px;
    color: #B7BBC4;
`;
export const SearchInputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.1);
  border-radius: 4px;
  z-index: 1;
`;
export const SearchInputItem = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  :first-child {
    width: 100%;
  }
  @media (max-width: 535px)
    :nth-child(2) {
        width: 46px;
    }
  :last-child {
    padding-right: 8px;
    @media (max-width: 535px) {
      display: none;
    }
  }
`;
export const LabelIcon = styled.label`
  margin-top: 4px;
  padding: 8px 12px;
  max-width: 60px !important
`;
export const SearchInput = styled.input`
  position: relative;
  background: transparent;
  border: none;
  color: #B7BBC4;
  font-size: 16px;
  font-weight: normal;
  outline: none;
  padding: 0;
  width: 100%;
  height: 48px;
  margin: 0 0 0 8px;
  font-weight: 600;
  letter-spacing: .2px;
`;


// Search List
export const SearchListWrap = styled.div`
  position: relative;
  height: 100%;
  max-height: 74vh;
  margin: 0 auto;
  overflow: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2px 2.5px;
  background: #fff;
    
    ::-webkit-scrollbar-track
    {
        background: rgba(251, 251, 251, 0.6);
    }

    ::-webkit-scrollbar
    {
        width: 0px;
        background: #f6f6f6;

    }

    ::-webkit-scrollbar-thumb
    {
        background-color: #f0f0f0;
    }
`;
export const LocationBindDiv = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.08);
  margin: 4px auto;
  padding: 4px 8px;
`;
export const SearchResultDiv = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.08);
  margin: 4px auto;
  padding: 18px 8px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

// Loader
  // Dots Loader
  export const DotsWrap = styled.div`
    position: absolute;
    display: flex;
    right: -13px;
    align-items: center;
  `;
  export const DotsLoading = styled.div`
    text-align: center;
    width: 40px;
    display: flex;
    padding: 0 8px;
  `;
  export const DotLoading = styled.span`
    background-color: #000;
    border-radius: 10px;
    align-items: center;
    height: 6px;
    width: 6px;
    :first-child{
      animation: dot-keyframes .5s infinite ease-in-out;
    }
    :nth-child(2){
      animation: dot-keyframes .8s infinite ease-in-out;
    }
    :last-child{
      animation: dot-keyframes 1s infinite ease-in-out;
    }
    :not(:last-child) {
      margin-right: 2px;
    }
    
    @keyframes dot-keyframes {
      0% {
        opacity: .4;
        transform: scale(1, 1);
      }

      50% {
        opacity: 1;
        transform: scale(1.2, 1.2);
      }

      100% {
        opacity: .4;
        transform: scale(1, 1);
      }
    }

  `;

  // Card Loader
  export const CardLoaderWrap = styled.div`
    height: 100%;
    width: 100%;
    margin: 4px auto;
    padding: 0 8px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 1px 0px 4px 0px rgba(0,0,0,0.08);
  `;
  export const CardLoaderElement = styled.span`
    position: relative;
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
    margin: 8px 4px;
    display: block;
    padding: 6.9px 0;

    @keyframes placeHolderShimmer{
      0%{
          background-position: -468px 0
      }
      100%{
          background-position: 468px 0
      }
    }
  `
  export const CardLoaderChildren = styled.span`
    position: relative;
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
    margin: 8px 4px;
    display: block;
    :nth-child(1){
      height: 24px;
      width: 31px;
      border-radius: 100%;
        @media (max-width: 535px) {
         min-width: 26px;
        }
    }
    :nth-child(2){
      height: 14px;
      width: 100%;
    }
    :nth-child(3){
      height: 14px;
      width: 40px;
      margin: 0 0 0 4px;
    }
    @keyframes placeHolderShimmer{
      0%{
          background-position: -468px 0
      }
      100%{
          background-position: 468px 0
      }
    }
  `