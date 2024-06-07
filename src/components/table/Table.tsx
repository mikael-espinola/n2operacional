"use client";

import React, { useEffect, useState } from "react";
import { Columns, Container, FixedItem, Items, Line } from "./style";
import ordens from "@/data/ordens";
import EditField from "./editField/EditField";
import { useUser } from "@/context/UserProvider";
import { User } from "@/data/users";
import nookies from "nookies";

export type Ordem = {
  id: string;
  gt: string;
  operador: string;
  status: string;
  H_RETORNO: string;
  DATA_ABERTURA: string;
  EMPRESA: string;
  CIDADE: string;
  TME: string;
  ASSUNTO: string;
  SERVICO: string;
  BAIRRO: string;
  CAMINHO: string;
  TEC: string;
  HISTÓRICO: string;
  RESOLUCAO_N2: string;
  RUA: string;
  UF: string;
  RE: string;
  H_FINALIZADA: string;
  FINALIZACAO: string;
  EDITOR_1: string;
  OP: string;
  RUIE: string;
  ORDEM: string;
  CONTRATO: string;
};
interface Props {
  isProdutividade?: boolean;
  userOrdens?: Ordem[];
}

const Table = ({ isProdutividade, userOrdens }: Props) => {
  const [linhas, setLinhas] = useState<any[]>([]);
  const [ordensList, setOrdensList] = useState(ordens);
  const context = useUser();

  if (!context) {
    return;
  }
  const {
    setId,
    isOpen,
    setIsOpen,
    isUserData,
    setIsUserData,
    userName,
    updatedUsers,
  } = context;

  useEffect(() => {
    const cookies = nookies.get(null);
    const isUserDataCookie = cookies.isUserData === "true";

    if (isUserDataCookie) {
      setIsUserData(true);
      const data = updatedUsers?.find((user: User) => user.user === userName);
      setOrdensList(data ? data.vtList : []);
    } else {
      setOrdensList(ordens);
    }
  }, [updatedUsers, userName, ordens]);

  useEffect(() => {
    nookies.set(null, "isUserData", isUserData ? "true" : "false", {
      path: "/",
    });
  }, [isUserData]);

  const handleClick = (value: string) => {
    setId(value);
    setIsOpen(true);
  };

  useEffect(() => {
    const arrL: any[] = [];

    ordensList.map((ordem) => {
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
  }, [ordensList]);

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
