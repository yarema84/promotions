import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Header from "../Header";
import LeftNav from "../LeftNav";

const StyledMainLayout = styled.div`
    display: grid;
    grid-template-areas: "header header" "menu content";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 10% 1fr;
    grid-gap: 10px;
    min-height: 100vh;
    margin: 0;
    background-color: ${({ theme }) => theme.color.bg};

    ${({ theme }) => theme.mobile`
        grid-template-areas: "header" "content";
        grid-template-columns: 1fr;
   `}
`;

const Content = styled.div`
    grid-area: content;
    padding: 15px;
`;

const MainLayout = (props) => {
    const { children } = props;
     return (
        <StyledMainLayout>
            <Header />
            <LeftNav />
            <Content>{ children }</Content>
        </StyledMainLayout>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;