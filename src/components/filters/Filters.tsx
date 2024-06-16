import React from "react";
import { Filter, FilterOption, List, ListItem, Section2 } from "./style";
import { useFilters } from "@/context/filterProvider";

const Filters = () => {
  const { setFilter, filters, setCurrentFilter } = useFilters();

  const filterKeys = [
    {
      operador: [
        { id: 1, name: "OPERADOR", isActive: false },
        { id: 2, name: "mikael.espinola", isActive: false },
        { id: 3, name: "alcigleydson.silva" },
        { id: 4, name: "debora.karoline" },
      ],
      status: [
        { id: 1, name: "status" },
        { id: 2, name: "em tratativa" },
        { id: 3, name: "finalizado" },
      ],
      empresa: [
        { id: 1, name: "empresa" },
        { id: 2, name: "cabo" },
        { id: 3, name: "multiplay" },
        { id: 4, name: "cortez" },
        { id: 5, name: "alares" },
      ],
      bairro: [
        { id: 1, name: "bairro" },
        { id: 2, name: "Tirol" },
        { id: 3, name: "Sao Vicente" },
        { id: 4, name: "aldeota" },
        { id: 5, name: "matadouro" },
      ],
      cidade: [
        { id: 1, name: "cidade" },
        { id: 2, name: "natal" },
        { id: 3, name: "fortaleza" },
        { id: 4, name: "sao goncalo do amarante" },
        { id: 5, name: "ourinhos" },
        { id: 6, name: "Botelhos" },
      ],
      assunto: [
        { id: 1, name: "assunto" },
        { id: 2, name: "manutencao tv" },
        { id: 3, name: "manutencao internet" },
        { id: 4, name: "retrabalho" },
      ],
      uf: [
        { id: 1, name: "uf" },
        { id: 2, name: "ce" },
        { id: 3, name: "sp" },
        { id: 4, name: "mg" },
        { id: 5, name: "rn" },
        { id: 6, name: "jp" },
      ],
    },
  ];

  const handleFilters = (filter: string, value: string) => {
    let currentValue = value.toLowerCase();
    currentValue === filter ? "" : value;

    if (value.toLowerCase() === filter) {
      currentValue = "";
    }

    // continuar daqui //
    setFilter({ ...filters, [filter]: currentValue });
    setCurrentFilter(currentValue);
    currentValue = "";
  };

  return (
    <Section2>
      {filterKeys.map((key, index) => (
        <List key={index}>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("operador", e.currentTarget.value)}
            >
              {key.operador.map((operador) => (
                <FilterOption key={operador.id}>{operador.name}</FilterOption>
              ))}
            </Filter>
          </ListItem>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("empresa", e.currentTarget.value)}
            >
              {key.empresa.map((empresa) => (
                <FilterOption key={empresa.id}>
                  {empresa.name.toUpperCase()}
                </FilterOption>
              ))}
            </Filter>
          </ListItem>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("cidade", e.currentTarget.value)}
            >
              {key.cidade.map((cidade) => (
                <FilterOption key={cidade.id}>
                  {cidade.name.toUpperCase()}
                </FilterOption>
              ))}
            </Filter>
          </ListItem>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("assunto", e.currentTarget.value)}
            >
              {key.assunto.map((assunto) => (
                <FilterOption key={assunto.id}>
                  {assunto.name.toUpperCase()}
                </FilterOption>
              ))}
            </Filter>
          </ListItem>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("bairro", e.currentTarget.value)}
            >
              {key.bairro.map((bairro) => (
                <FilterOption key={bairro.id}>
                  {bairro.name.toUpperCase()}
                </FilterOption>
              ))}
            </Filter>
          </ListItem>
          <ListItem>
            <Filter
              onChange={(e) => handleFilters("uf", e.currentTarget.value)}
            >
              {key.uf.map((uf) => (
                <FilterOption key={uf.id}>{uf.name.toUpperCase()}</FilterOption>
              ))}
            </Filter>
          </ListItem>
        </List>
      ))}
    </Section2>
  );
};

export default Filters;
