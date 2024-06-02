"use client";
import React, { useEffect, useState } from "react";
import { Columns, Container, FixedItem, Items, Line } from "./style";
import ordens from "@/data/ordens";

const Table = () => {
  const [linhas, setLinhas] = useState<any[]>([]);

  const handleClick = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    const arrL: any[] = [];

    ordens.map((ordem) => {
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
          <Items>{ordem.SERVIÇO}</Items>
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
  }, [ordens]);

  return (
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
  );
};

export default Table;
