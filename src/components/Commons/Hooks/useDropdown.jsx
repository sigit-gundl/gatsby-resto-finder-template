import React, { useState } from "react";
import styled from "styled-components";
// Icon
import { ArrowDownIcon, ArrowLeftIcon } from "../../Materials/icons";


export const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
    const DropdownStyled = styled.div`
        z-index: 1;
    `;
    const DropdownButton = styled.span`
        cursor: pointer;
        border-radius: 100%;
        padding: 22px 13px 10px;
        background: ${isOpen ? "rgba(251, 251, 251, 0.6)" : "transparent"};
        transform: scale(0.5);
        :hover{
            background: rgba(251, 251, 251, 0.6);
            transform: scale(0.8);
        }
    `;

    const DropdownItemWrap = styled.div`
        position: absolute;
        margin: 14px 0 0 -52px;
        background: #f6f6f6;
        padding: 6px 8px;
        border-radius: 4px;
        ${isOpen ? "" : "display:none"}
    `;

   

  return (
    <DropdownStyled>
      <DropdownButton
        onClick={e => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 
        <ArrowLeftIcon/>
        :
        <ArrowDownIcon/>
        }
      </DropdownButton>
      <DropdownItemWrap>
        {props.children}
      </DropdownItemWrap>
    </DropdownStyled>
  );
}

export const DropdownItem = (props) => {
    const DropdownItemStyled = styled.div`
        cursor: pointer;
        padding: 4px 6px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        svg{
            width: 18px;
            margin-right: 12px;
        }
        :hover{
            background: rgba(251, 251, 251, 0.6);
        }
    `;
    return (
      <DropdownItemStyled onClick={props.onClick}>
        {props.children}
      </DropdownItemStyled>
    );
  }
  
