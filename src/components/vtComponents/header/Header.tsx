"use client";
import React from "react";
import {
  ActionButton,
  ActionText,
  Container,
  MenuActions,
  SearchInput,
  Section1,
  Text,
} from "./style";
import LogoffButton from "./logoffButton/LogoffButton";
import Filters from "@/components/filters/Filters";
import nookies from "nookies";

const Header = () => {
  const handleProdutPessoal = () => {
    nookies.set({}, "isUserData", "true", {
      path: "/",
    });
  };

  return (
    <Container>
      <Section1>
        <Text>N2 Operacional - VT</Text>
        <MenuActions>
          <ActionButton onClick={handleProdutPessoal} href="/produtividade">
            <ActionText>Produtividade</ActionText>
          </ActionButton>
          <SearchInput type="text" placeholder="Pesquise" />
          <LogoffButton />
        </MenuActions>
      </Section1>
      <Filters />
    </Container>
  );
};

export default Header;
