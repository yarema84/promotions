import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h1`
    color: ${props => props.theme.color.default};
    margin: 15px 0;
    font-size: 32px;
    line-height: 36px;
    font-weight: normal;
`;

const PageTitle = ({title}) => (
    <StyledPageTitle>{title}</StyledPageTitle>
);

export default PageTitle;