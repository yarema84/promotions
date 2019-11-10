import React, {useState, useEffect} from "react";
import styled from "styled-components";
import PromotionItem from "./PromotionItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 1vw;

    ${({ theme }) => theme.mobile`
        grid-template-columns: none;
        grid-gap: 3vw;
    `}
`;

const PromotionTitle = styled.h2`
    color: ${props => props.theme.color.default};
    font-size: 24px;
    line-height: 32px;
    font-weight: normal;
    padding-bottom: 20px;

    ${({ theme }) => theme.mobile`
        font-size: 16px;
        line-height: 20px;
    `}
`;

const StyledListItem = styled.li`
    ${({ theme }) => theme.mobile`
        margin-bottom: 20px;
    `}
`;

const Button = styled.button`
    display: block;
    color: ${props => props.theme.color.default};
    background: ${props => props.theme.color.btn};
    font-size: 14px;
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0 20px;
    height: 40px;
    min-width: 36px;
    border-radius: 4px;
    vertical-align: middle;
    text-align: center;
    margin: 25px auto;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.color.btnHover};
    }
`;

const PromotionsList = () => {
    const [promoList, setData] = useState([]);
    const [activePromo, setActivePromo] = useState(null);

    const fetchData = async () => {
        const { data } = await import("../../mocks/promotions.json");
        setData([...promoList, ...data]);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <PromotionTitle>Limited time offers</PromotionTitle>
            <StyledList>
                {promoList.map((promo, index) => (
                    <StyledListItem key={`${promo.id}${index}`}>
                        <PromotionItem 
                            {...promo}
                            onClick={setActivePromo}
                            index={index}
                            active={activePromo === index}
                        />
                    </StyledListItem>
                ))}
            </StyledList>
            <Button onClick={fetchData}>Load More</Button>
        </>
    )
}

export default PromotionsList;