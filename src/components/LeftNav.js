import React from "react";
import styled from "styled-components";

const StyledLeftNav = styled.div`
    grid-area: menu;
    background-color: ${({ theme }) => theme.color.darkBg};
    border-radius: 4px;
    box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.3);
    color: ${props => props.theme.color.default};
    padding: 15px;

    ${({ theme }) => theme.mobile`
       display: none;
   `}
`;

const LeftNav = () => (
    <StyledLeftNav>Menu</StyledLeftNav>
);

export default LeftNav;