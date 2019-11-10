import React, {useCallback} from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { PromoLabel } from "../SvgIcons";

const activeClassName = 'active';

const PromoImg = styled.div`
    display: block;
    background-image: url(${({ imgSrc }) => imgSrc});
    background-position: center;
    background-size: cover;
    height: 236px;
    order: 1;

    ${({ theme }) => theme.mobile`
        order: 0;
        height: 132px;
   `}
`;

const PromoText = styled.div`
    padding: 0 30px;
    height: calc(100% - 2px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    border: 1px solid ${props => props.theme.color.darkBg};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
    transition: all 0.5s ease-out;

    ${({ theme }) => theme.mobile`
        padding: 0 25px;
        border-top: none;
        border-right: 1px solid ${theme.color.darkBg};
        border-top-left-radius: 0;
        border-bottom-right-radius: 4px;
   `}
`;

const StyledPromoLabel = styled.span`
    display: none;
    position: absolute;
    top: 0;
    left: 32px;

    ${({ theme }) => theme.mobile`
        left: 5px;
   `}
`;

const PromoHeader = styled.h3`
    font-size: 20px;
    line-height: 28px;
    font-weight: normal;
    margin: 0 0 15px;
    max-height: 112px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    ${({ theme }) => theme.mobile`
        max-height: 112px;
        -webkit-line-clamp: 3;
   `}
`;

const PromoDescription = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.color.primary};
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    ${({ theme }) => theme.mobile`
        font-size: 14px;
        line-height: 20px;
        height: 40px;
        margin-bottom: 10px;
   `}
`;

const StyledPromotion = styled.a.attrs(props => ({
    className: props.active ? activeClassName : ""
}))`
    display: grid;
    grid-template-columns: 5.5fr 4.5fr;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.theme.color.darkBg};
    box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    color: ${props => props.theme.color.default};
    position: relative;

    &.active {
        ${StyledPromoLabel} {
            display: block;
        }
    }
    &:hover, &.active {
        ${PromoText} {
            border: 1px solid  ${props => props.theme.color.border};
            border-right: none;

            ${({ theme }) => theme.mobile`
                border-top: none;
                border-right: 1px solid ${theme.color.border};
                border-top-left-radius: 0;
                border-bottom-right-radius: 4px;
            `}
        }
    }

    ${({ theme }) => theme.mobile`
        grid-template-columns: 1fr;
        grid-template-rows: 4.5fr 5.5fr;
    `}
`;

const PromotionItem = React.memo((props) => {
    const { title, description, img, active, onClick, index } = props;
    return (
        <StyledPromotion 
            active={active} 
            onClick={useCallback(() => onClick(index), [index])}>
            <PromoImg imgSrc={img} />
            <StyledPromoLabel>
                <PromoLabel />
            </StyledPromoLabel>
            <PromoText>
                <PromoHeader>{title}</PromoHeader>
                <PromoDescription>{description}</PromoDescription>
            </PromoText>
        </StyledPromotion>
    )
});

PromotionItem.propTypes = {
    promo:  PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        img: PropTypes.string,
    }),
    index: PropTypes.number,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default PromotionItem;