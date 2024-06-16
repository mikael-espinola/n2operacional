"use client";
import { createContext, useContext, useState } from "react";

export interface FiltersProp {
  operador: string;
  status: string;
  empresa: string;
  cidade: string;
  assunto: string;
  bairro: string;
  uf: string;
}

const FilterTemplate: FiltersProp = {
  operador: "",
  status: "",
  empresa: "",
  cidade: "",
  assunto: "",
  bairro: "",
  uf: "",
};
interface FilterProviderProp {
  filters: FiltersProp;
  setFilter: (value: FiltersProp) => void;
  currentFilter: string;
  setCurrentFilter: (value: string) => void;
}

const filterContext = createContext<FilterProviderProp | undefined>(undefined);

const FilterProvider = ({ children }: any) => {
  const [filters, setFilter] = useState(FilterTemplate);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  return (
    <filterContext.Provider
      value={{ filters, setFilter, setCurrentFilter, currentFilter }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;

export const useFilters = () => {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error("filtersContext is not defined");
  }
  return context;
};
