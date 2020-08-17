import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useModal, ModalButton, ModalContent } from "../Commons/Hooks/useModal";

import { LoginScreen } from "../User"
import styled from "styled-components";
// Commons
import { Brand, FillSpace, FlexItem } from "../../components/Styled/components/commons";
// Display
import { DisplayFlex } from "../../components/Styled/components/display";
// Text
import { Strong } from "../../components/Styled/components/text";
// Button
import { ButtonOutlineRed, ButtonRed } from "../../components/Styled/components/button";
// Navbar
export const NavbarStyled = styled.nav`
  position: relative;
  background: white;
  color: #030303;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.1);
  display: flex;
  box-sizing: border-box;
  padding: 0 0.5vw 0 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: 64px;
  align-items: center;
  @media (max-width: 535px) {
    div{
      div:last-child{
        display: none;
      }
    }
  }
`
const Navbar = ({config, children}) => {
    const { siteTitle } = config;
    useEffect(() => {
      if (!siteTitle) {
        return null;
      }
    })
    const {isShowing, toggle} = useModal();
    return (
      <>
      <NavbarStyled>
        <Link to="/">
          <Brand>
            {siteTitle}
          </Brand>
        </Link>
        <FillSpace></FillSpace>
        <FlexItem>
          Randomizer
        </FlexItem>
        <DisplayFlex>
        <FlexItem>
          <ModalButton toggle={toggle}>
            <ButtonOutlineRed>              
              <Strong>Login</Strong>
            </ButtonOutlineRed>
          </ModalButton>
        </FlexItem>
        <FlexItem>
          <ButtonRed>
            <Link to="/register">              
              <Strong>Register</Strong>
            </Link>
          </ButtonRed>
        </FlexItem>
        </DisplayFlex>
      </NavbarStyled>
      {children}
      <ModalContent isShowing={isShowing} hide={toggle}>
        <LoginScreen/>
      </ModalContent>
      </>
    );
}

export default Navbar;
