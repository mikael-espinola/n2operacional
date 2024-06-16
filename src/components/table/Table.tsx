"use client";

import React, { useEffect, useState } from "react";
import { Columns, Container, FixedItem, Items, Line } from "./style";
import EditField from "./editField/EditField";
import { useUser } from "@/context/UserProvider";
import { User } from "@/data/users";
import nookies from "nookies";
import { useFilters } from "@/context/filterProvider";
import { Ordem } from "@/data/ordens";

const Table = () => {
  const [linhas, setLinhas] = useState<any[]>([]);
  const [currentUSer, setCurrentUSer] = useState<any[]>();

  const {
    setId,
    isOpen,
    setIsOpen,
    userName,
    updatedUsers,
    setOrdensList,
    ordensList,
  } = useUser();

  const { filters, currentFilter } = useFilters();

  const verifyCookies = () => {
    const cookies = nookies.get(null);
    const isUserDataCookie = cookies.isUserData === "true";

    return isUserDataCookie;
  };

  useEffect(() => {
    const isUserDataCookie = verifyCookies();
    let ordensMapped: Ordem[] = [];

    if (currentFilter !== "") {
      console.log("entrou no 1o if");
      console.log(currentFilter);
      ordensList.map((ordem) => {
        if (ordem.EMPRESA === currentFilter) {
          console.log("entrou no 2o if");
          ordensMapped.push(ordem);
        }
      });
      console.log(ordensMapped);
      setOrdensList(ordensMapped);
      return;
    }

    if (isUserDataCookie) {
      const data: User = updatedUsers?.find(
        (user: User) => user.user === userName
      );
      const dataVt = data && data.vtList;
      setCurrentUSer(dataVt || undefined);
    } else {
      setOrdensList(ordensList);
    }
  }, [updatedUsers, userName, filters]);

  const handleClick = (value: string) => {
    setId(value);
    setIsOpen(true);
  };

  useEffect(() => {
    const arrL: any[] = [];

    const isUser = verifyCookies();

    isUser
      ? currentUSer?.map((ordem) => {
          arrL.push(
            <Line key={ordem.id} onClick={() => handleClick(ordem.id)}>
              <Items>{ordem.operador}</Items>
              <Items>{ordem.gt}</Items>
              <Items>{ordem.status}</Items>
              <Items>{ordem.H_RETORNO}</Items>
              <Items>{ordem.DATA_ABERTURA}</Items>
              <Items>{ordem.EMPRESA}</Items>
              <Items>{ordem.CIDADE}</Items>
              <Items>{ordem.TME}</Items>
              <Items>{ordem.ASSUNTO}</Items>
              <Items>{ordem.SERVICO}</Items>
              <Items>{ordem.BAIRRO}</Items>
              <Items>{ordem.CAMINHO}</Items>
              <Items>{ordem.TEC}</Items>
              <Items>{ordem.HISTÓRICO}</Items>
              <Items>{ordem.RESOLUCAO_N2}</Items>
              <Items>{ordem.RUA}</Items>
              <Items>{ordem.UF}</Items>
              <Items>{ordem.RE}</Items>
              <Items>{ordem.H_FINALIZADA}</Items>
              <Items>{ordem.FINALIZACAO}</Items>
              <Items>{ordem.EDITOR_1}</Items>
              <Items>{ordem.OP}</Items>
              <Items>{ordem.RUIE}</Items>
            </Line>
          );
        })
      : ordensList?.map((ordem) => {
          arrL.push(
            <Line key={ordem.id} onClick={() => handleClick(ordem.id)}>
              <Items>{ordem.operador}</Items>
              <Items>{ordem.gt}</Items>
              <Items>{ordem.status}</Items>
              <Items>{ordem.H_RETORNO}</Items>
              <Items>{ordem.DATA_ABERTURA}</Items>
              <Items>{ordem.EMPRESA}</Items>
              <Items>{ordem.CIDADE}</Items>
              <Items>{ordem.TME}</Items>
              <Items>{ordem.ASSUNTO}</Items>
              <Items>{ordem.SERVICO}</Items>
              <Items>{ordem.BAIRRO}</Items>
              <Items>{ordem.CAMINHO}</Items>
              <Items>{ordem.TEC}</Items>
              <Items>{ordem.HISTÓRICO}</Items>
              <Items>{ordem.RESOLUCAO_N2}</Items>
              <Items>{ordem.RUA}</Items>
              <Items>{ordem.UF}</Items>
              <Items>{ordem.RE}</Items>
              <Items>{ordem.H_FINALIZADA}</Items>
              <Items>{ordem.FINALIZACAO}</Items>
              <Items>{ordem.EDITOR_1}</Items>
              <Items>{ordem.OP}</Items>
              <Items>{ordem.RUIE}</Items>
            </Line>
          );
        });
    setLinhas(arrL);
  }, [currentUSer, ordensList]);

  return (
    <>
      <Container>
        <Columns>
          <Line>
            <FixedItem>OPERADOR</FixedItem>
            <FixedItem>GT</FixedItem>
            <FixedItem>STATUS</FixedItem>
            <FixedItem>H_RETORNO</FixedItem>
            <FixedItem>DATA ABERTURA</FixedItem>
            <FixedItem>EMPRESA</FixedItem>
            <FixedItem>CIDADE</FixedItem>
            <FixedItem>TME</FixedItem>
            <FixedItem>ASSUNTO</FixedItem>
            <FixedItem>SERVIÇO</FixedItem>
            <FixedItem>BAIRRO</FixedItem>
            <FixedItem>CAMINHO</FixedItem>
            <FixedItem>TEC</FixedItem>
            <FixedItem>HISTÓRICO</FixedItem>
            <FixedItem>RESOLUÇÃO N2</FixedItem>
            <FixedItem>RUA</FixedItem>
            <FixedItem>UF</FixedItem>
            <FixedItem>RE</FixedItem>
            <FixedItem>H_FINALIZADA</FixedItem>
            <FixedItem>FINALIZAÇÃO</FixedItem>
            <FixedItem>EDITOR 1</FixedItem>
            <FixedItem>OP</FixedItem>
            <FixedItem>RUIE</FixedItem>
          </Line>
          {linhas}
        </Columns>
      </Container>
      {isOpen && <EditField />}
    </>
  );
};

export default Table;
