import React from "react";
import { Filter, FilterOption, List, ListItem, Section2 } from "./style";
import users from "@/data/users";

const Filters = () => {
  return (
    <Section2>
      <List>
        <ListItem key="0">
          <Filter>
            <FilterOption>OPERADOR</FilterOption>
            {users.map((user) => (
              <FilterOption>{user.user}</FilterOption>
            ))}
          </Filter>
        </ListItem>
        <ListItem key="1">
          <Filter>
            <FilterOption>STATUS</FilterOption>
          </Filter>
        </ListItem>
        <ListItem key="2">
          <Filter>
            <FilterOption>EMPRESA</FilterOption>
          </Filter>
        </ListItem>
        <ListItem key="3">
          <Filter>
            <FilterOption>CIDADE</FilterOption>
            <FilterOption>São Gonçalo do Amarante</FilterOption>
          </Filter>
        </ListItem>
        <ListItem key="4">
          <Filter>
            <FilterOption>ASSUNTO</FilterOption>
          </Filter>
        </ListItem>
        <ListItem key="5">
          <Filter>
            <FilterOption>BAIRRO</FilterOption>
          </Filter>
        </ListItem>
        <ListItem key="6">
          <Filter>
            <FilterOption>UF</FilterOption>
          </Filter>
        </ListItem>
      </List>
    </Section2>
  );
};

export default Filters;
