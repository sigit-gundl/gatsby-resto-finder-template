import React, { useState } from 'react'


import styled from "styled-components";

import g from '../../assets/img/socials/google-logo.svg'

import fb from '../../assets/img/socials/fb.png'
// Text
import { Header1, Strong, Paragraph } from '../Styled/components/text'
// Button
import { ButtonOutlineRed } from '../Styled/components/button';
// Display 
import { DisplayFlex } from '../Styled/components/display';
// Commons
import { FlexItem, FlexItemText } from '../Styled/components/commons';

const LoginScreenStyled = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 8px;
    .form {
        width: 100%;
        overflow: hidden;
        text-align: left;
        transition: .3s;
    }
    @media (min-width: 768px) {
        .form {
            width: 100%;
        }
    }
    .form__title {
        margin-bottom: 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
    }
    .form--login {
        opacity: 1;
        transition: opacity .5s ease;
    }
    .form--register {
        width: 0;
        height: 0;
        opacity: 0;
        transition: opacity .5s ease;
    }
    @media (min-width: 768px) {
        .form--register {
        width: 300px;
        height: auto;
        opacity: 1;
        }
    }
    .form__helper {
        position: relative;
        margin-bottom: 15px;
    }
    .form__helper:last-of-type {
        margin-bottom: 0;
    }
    .form__label {
        position: absolute;
        bottom: 10px;
        left: 0;
        color: black;
        font-family: 'Lato', sans-serif;
        font-size: 1.4rem;
        transition: .3s;
    }
    .form__input {
        position: relative;
        width: 100%;
        padding: 7px 8px;
        color: black;
        background-color: transparent;
        border-width: 0;
        outline: none;
        font-size: 19px;
        border-radius: 4px;
        box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.1);
    }
    .form__input::placeholder {
        opacity: 0;
    }
    .form__input:not(:placeholder-shown) + .form__label {
        bottom: 25px;
        color: #2E8E79;
        font-size: 1.2rem;
    }
    .form__input:focus {
        border-bottom-color: #2E8E79;
    }
    .form__input:focus + .form__label {
        bottom: 25px;
        color: #2E8E79;
        font-size: 1.2rem;
    }
    .form__button {
        width: 100%;
        margin-top: 20px;
        line-height: 40px;
        color: white;
        cursor: pointer;
        letter-spacing: 1px;
    }
    .retnews-or-auth{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: -39px;
        padding: 0px 12px;
        background: white;
    }
    hr.retnews-hr{
        margin: 28px auto;
        border: .1px solid #f8f8f8;
    }
    .form-header{
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            margin-right: 8px;
        }
    }
    
`;
const AuthWrap = styled.div`
   button{
        box-sizing: border-box;
        position: relative;
        user-select: none;
        cursor: pointer;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        line-height: 36px;
        overflow: visible;
        vertical-align: middle;
        align-items: center;
        z-index: 1;
        padding: 0 4vh 0 12vh;
        border: 2px solid #CE0606;
        color: #CE0606;
        background: transparent;
        border-radius: 4px;
        display: flex;
        width: 100%;
        margin: 8px auto;
        justify-content: center;
        img{
            position: absolute;
            left: 45px;
            width: 28px;
         }
    }
`;
// Input
const Input = styled.input`
    position: relative;
    width: ${props => props.width ? props.width : "100%"};
    padding: 12px 8px;
    background: #f2f2f2;
    border-width: 0;
    outline: none;
    font-size: 20px;
    border-radius: 4px;
`;

const LoginScreen = () => {
    const [ Login, setLogin ] = useState();
    
    return(
    <LoginScreenStyled>
        <Header1>Sign in</Header1>
        <div className="form-header">
            <p>Login With { Login ? "Email" : "Phone Number"} ?</p>
            <span onClick={() => { setLogin(!Login) }}>Login</span>
        </div>
        <form className="form form--login" action="">
            {
            Login ?
            <DisplayFlex>
              <FlexItem padding="15px 8px" margin="0 4px 0 0" background="#f2f2f2" borderRadius="4px">
                <Strong>
                    +62
                </Strong>
              </FlexItem>
              <Input type="tel" name="user" id="user" placeholder="Your number phone ..."/>
            </DisplayFlex>
            :
            <>
            <div className="form__helper">
            <Input type="text" name="user" id="user" placeholder="Username or email"/>
            <label className="form__label" for="user"></label>
            </div>
            <div className="form__helper">
                <Input type="password" name="password" id="password" placeholder="Password"/>
                <label className="form__label" for="password"></label>
            </div>
            </>
            }
            <DisplayFlex>
                <Input width="40px" type="checkbox"/>
                <FlexItemText>
                    <Paragraph>
                        Lorem Ipsum Dolor Sit Asmet Consteteur
                    </Paragraph>
                </FlexItemText>
            </DisplayFlex>
            <button type="submit" className="retnews-btn--red form__button">Login</button>
        </form>
        <hr className="retnews-hr"/>
        <Strong className="retnews-or-auth">or</Strong>
        <AuthWrap>
            <ButtonOutlineRed>
                <img src={g} alt="google"/> 
                <Strong>Login with Google</Strong>
            </ButtonOutlineRed>
            <ButtonOutlineRed>
                <img src={fb} alt="fb"/> 
                <Strong>Login with Facebook</Strong>
            </ButtonOutlineRed>
        </AuthWrap>
    </LoginScreenStyled>
    )
}
export default LoginScreen