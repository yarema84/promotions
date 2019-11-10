import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import PromotionsList from "../components/Promotions/PromotionsList";
import PageTitle from "../components/PageTitle";

const Promotions = () => (
    <MainLayout>
        <PageTitle title="Promotions" />
        <PromotionsList />
    </MainLayout>
)

export default Promotions;