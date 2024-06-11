"use client";
import React from "react";
import { ButtonsContainer, Header, Saudation } from "./style";
import ReturnButton from "@/components/returnButton/ReturnButton";
import LogoffButton from "@/components/vtComponents/header/logoffButton/LogoffButton";
import Filters from "@/components/filters/Filters";
import { useUser } from "@/context/UserProvider";
import { Section } from "@/app/vt/style";
import Table from "@/components/table/Table";

const MainComponent = () => {
  const context = useUser();
  if (!context) {
    return;
  }
  const { userName } = context;

  return (
    <>
      <Header>
        <h1>Produtividade Pessoal</h1>
        {userName && <Saudation>Hello, {userName}!</Saudation>}
        <ButtonsContainer>
          <ReturnButton />
          <LogoffButton />
        </ButtonsContainer>
        <Filters />
      </Header>
      <Section>
        <Table />
      </Section>
    </>
  );
};

export default MainComponent;
