import React from "react";
import { Filter, FilterOption, List, ListItem, Section2 } from "./style";
import users from "@/data/users";
import { FiltersProp, useFilters } from "@/context/filterProvider";

const Filters = () => {
  const { setFilter, filters } = useFilters();

  const handleFilters = (filter: keyof FiltersProp, value: string) => {
    setFilter({ ...filters, [filter]: value });
  };

  return (
    <Section2>
      <List>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("operador", e.currentTarget.value)}
          >
            <FilterOption>OPERADOR</FilterOption>
            {users.map((user) => (
              <FilterOption key={user.id}>{user.user}</FilterOption>
            ))}
          </Filter>
        </ListItem>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("status", e.currentTarget.value)}
          >
            <FilterOption>STATUS</FilterOption>
          </Filter>
        </ListItem>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("empresa", e.currentTarget.value)}
          >
            <FilterOption>EMPRESA</FilterOption>
          </Filter>
        </ListItem>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("cidade", e.currentTarget.value)}
          >
            <FilterOption>CIDADE</FilterOption>
            <FilterOption>São Gonçalo do Amarante</FilterOption>
          </Filter>
        </ListItem>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("assunto", e.currentTarget.value)}
          >
            <FilterOption>ASSUNTO</FilterOption>
          </Filter>
        </ListItem>
        <ListItem>
          <Filter
            onChange={(e) => handleFilters("bairro", e.currentTarget.value)}
          >
            <FilterOption>BAIRRO</FilterOption>
          </Filter>
        </ListItem>
        <ListItem>
          <Filter onChange={(e) => handleFilters("uf", e.currentTarget.value)}>
            <FilterOption>UF</FilterOption>
          </Filter>
        </ListItem>
      </List>
    </Section2>
  );
};

export default Filters;
