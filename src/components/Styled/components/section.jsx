import styled from 'styled-components'

export const Section = styled.section`
 position: relative;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  width: ${ props => props.active ? "104vh": "100%"};
  background: ${ props => props.backgroundColor ? props.backgroundColor: "transparent"};
  height: 100vw;
  max-height: ${ props => props.active ? "40vh": "40vw"};
  min-height: 280px;
  ${ props => props.active ? "margin: -45px auto": ""};
  padding: ${ props => props.active ? "0 0 0 0" : "" };
  @media (max-width: 1100px) {
    padding: ${ props => props.active ? "4px 4px" : "" };
  }
  @media (max-width: 796px) {
    padding: ${ props => props.active ? "4px 4px" : "" };
    ${ props => props.active ? "width: 100%" : "0" };

  }
  @media (max-width: 535px) {
    padding: ${ props => props.active ? "4px 4px" : "" };
  }
`
export const SectionWrap = styled.div`
  position: relative;
  transform: scale(1.2);
  @media (max-width: 535px) {
    transform: scale(1);
  }
`
// section
// Find
export const FindStyled = styled.div`
  position: relative;
  width: 60%;
  margin: -19px auto;
  top: -58px;
  @media (max-width: 535px) {
    width: 90%;
  }
`
// Join
export const JoinStyled = styled.div`
  position: relative;
  color: white;
  margin-top: -50px;
  padding: 0 3vw;
`
// Testimonal
export const TestimonalStyled = styled.div`
  position: relative;
  width: 100%;
  color: #ffffff;
  top: -8px;
  .swipe-wrap{
    padding: 0 8vw;
    @media (max-width: 535px) {
      margin-left: -30vw;
      width: 160vw;
      padding: 0 2vw;
    }
  }
  .swipe-item{
    height: 200px;
  }
  @media (max-width: 1100px) {
    transform: scale(0.8);
  }
  @media (max-width: 832px) {
    transform: scale(0.6);
  } 
`
// Partner
export const PartnerStyled = styled.div`
  position: relative;
  top: -8px;
  .swipe-wrap{
    position: relative;
    padding: 0 35vw;
    width: 100%;
    @media (max-width: 1100px) {
      padding: 0 30vw;
    }
    @media (max-width: 832px) {
      width: 140%;
      left: -20%;
    }
    @media (max-width: 535px) {
      width: 160%;
      left: -30%;
      padding: 0 36vw;
    }
  }
  .swipe-item{
    position: relative;
    overflow-x: hidden !important;

    img{
      transform: scale(0.8);
    }
  }
  @media (max-width: 1100px) {
    transform: scale(0.8);
  }
  @media (max-width: 832px) {
    transform: scale(0.6);
  } 
`