import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    grid-area: header;
    padding: 15px;
    color: ${props => props.theme.color.default};
`;

const Header = () => (
    <StyledHeader>Header</StyledHeader>
);

export default Header;