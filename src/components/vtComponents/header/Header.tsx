import React from "react";
import {
  ActionButton,
  ActionText,
  Container,
  Filter,
  FilterOption,
  SearchInput,
  Section1,
  Section2,
  Text,
} from "./style";

const Header = () => {
  // const options = ['operador', 'status', 'cabo', 'cidade', 'assunto', 'bairro', 'uf']
  const options = [
    {
      id: 1,
      category: "operador",
      categoryOptions: ["livre", "mikael.espinola"],
    },
    {
      id: 2,
      category: "status",
      categoryOptions: ["ligando", "em tratativa"],
    },
  ];
  return (
    <Container>
      <Section1>
        <Text>N2 Operacional - VT</Text>
        <ActionButton href="/produtividade">
          <ActionText>Produtividade</ActionText>
        </ActionButton>
        <SearchInput type="text" placeholder="Pesquise" />
        <ActionButton href="/">Logoff</ActionButton>
      </Section1>
      <Section2>
        <Filter value="status">
          <FilterOption>OPERADOR</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>STATUS</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>EMPRESA</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>CIDADE</FilterOption>
          <FilterOption>São Gonçalo do Amarante</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>ASSUNTO</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>BAIRRO</FilterOption>
        </Filter>
        <Filter value="status">
          <FilterOption>UF</FilterOption>
        </Filter>
      </Section2>
    </Container>
  );
};

export default Header;
