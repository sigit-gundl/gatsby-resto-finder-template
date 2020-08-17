import React from 'react'
import styled from "styled-components";

const RegisterScreen = () => {
    const RegisterScreenStyled = styled.div`
    
    display: grid;
    place-items: center;
    height: 100vh;
  
  .box {
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    padding: 220px 20px 20px;
    overflow: hidden;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 768px) {
    .box {
      min-height: 400px;
      padding: 0;
    }
    .box__toggle:checked + .box__image {
      left: 300px;
    }
  }
  @media (max-width: 767px) {
    .box__toggle:checked ~ .form--register {
      width: 100%;
      height: auto;
      opacity: 1;
    }
    .box__toggle:checked ~ .form--login {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
  .box__image {
    height: 100%;
    min-height: 412px;

    img{
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: .4s ease-in-out;
    }

  }
  @media (min-width: 768px) {
    .box__image {
      width: 300px;
      height: 100%;
      object-position: 0 0;
    }
  }
  
  .form {
    width: 100%;
    overflow: hidden;
    text-align: left;
    transition: .3s;
  }
  @media (min-width: 768px) {
    .form {
      width: 300px;
      padding: 0 20px;
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
    padding: 5px 0;
    color: black;
    background-color: transparent;
    border-width: 0;
    border-bottom: 1px solid black;
    outline: none;
    font-family: 'Lato', sans-serif;
    font-size: 1.4rem;
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
    padding: 10px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  .form__link {
    color: #2E8E79;
    cursor: pointer;
  }
    `;
   
    return(
    <>
    <h1>Register</h1>
    
    <RegisterScreenStyled>
        <div className="box">
            <div className="box__image">
                <input type="checkbox" id="toggle" className="box__toggle" hidden />
                <img src="https://source.unsplash.com/zv3ckJKftC4/300x400" alt="Picture by Autumn Studio"/>      
            </div>
            
            <form className="form form--register" action="">
                <h1 className="form__title">Sign up</h1>

                <div className="form__helper">
                    <input type="text" name="user" id="new-user" placeholder="User" className="form__input" />
                    <label className="form__label" for="new-user">User</label>
                </div>

                <div className="form__helper">
                    <input type="email" name="email" id="email" placeholder="Email" className="form__input" />
                    <label className="form__label" for="email">Email</label>
                </div>

                <div className="form__helper">
                    <input type="password" name="password" id="new-user-password" placeholder="Password" className="form__input" />
                    <label className="form__label" for="new-user-password">Password</label>
                </div>

                <div className="form__helper">
                    <input type="password" name="password" id="confirm-password" Placeholder="Confirm password" className="form__input" />
                    <label className="form__label" for="confirm-password">Confirm password</label>
                </div>

                <button type="submit" className="retnews-btn--red form__button">Register</button>

                <p>Already have an account?</p><label for="toggle" className="form__link">Sign in!</label>
            </form>

        </div>
    </RegisterScreenStyled>
    </>
    )
}
export default RegisterScreen