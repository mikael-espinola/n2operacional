import React from "react";
import {
  ActionButton,
  ActionText,
  Container,
  Filter,
  FilterOption,
  List,
  ListItem,
  MenuActions,
  SearchInput,
  Section1,
  Section2,
  Text,
} from "./style";
import LogoffButton from "./logoffButton/LogoffButton";

const Header = () => {
  return (
    <Container>
      <Section1>
        <Text>N2 Operacional - VT</Text>
        <MenuActions>
          <ActionButton href="/produtividade">
            <ActionText>Produtividade</ActionText>
          </ActionButton>
          <SearchInput type="text" placeholder="Pesquise" />
          <LogoffButton />
        </MenuActions>
      </Section1>
      <Section2>
        <List>
          <ListItem key="0">
            <Filter value="status">
              <FilterOption>OPERADOR</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="1">
            <Filter value="status">
              <FilterOption>STATUS</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="2">
            <Filter value="status">
              <FilterOption>EMPRESA</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="3">
            <Filter value="status">
              <FilterOption>CIDADE</FilterOption>
              <FilterOption>São Gonçalo do Amarante</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="4">
            <Filter value="status">
              <FilterOption>ASSUNTO</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="5">
            <Filter value="status">
              <FilterOption>BAIRRO</FilterOption>
            </Filter>
          </ListItem>
          <ListItem key="6">
            <Filter value="status">
              <FilterOption>UF</FilterOption>
            </Filter>
          </ListItem>
        </List>
      </Section2>
    </Container>
  );
};

export default Header;
