"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  CloseButton,
  CloseIcon,
  Container,
  Header,
  Item,
  ItemValue,
  Main,
  Option,
  SalveButton,
  Select,
  TextArea,
  TextContainer,
  Title,
  Value,
} from "./style";
import { CgCloseO } from "react-icons/cg";
import { useUser } from "@/context/UserProvider";
import ordens from "@/data/ordens";
import users, { User, VTItem } from "@/data/users";

const Modal = () => {
  const [textArea, setTextArea] = useState("");
  const [status, setStatus] = useState("");
  const [isProceed, setIsProceed] = useState("");
  const [ordemEditada, setOrdemEditada] = useState({});

  const context = useUser();
  if (!context) {
    throw new Error("error");
  }
  const { userName, id, setIsOpen, userId, setUpdateUsers, updatedUsers } =
    context;

  const ordem = ordens.find((ordem) => ordem.id === id);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStatusOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };
  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };
  const handleIsProceed = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsProceed(e.target.value);
  };

  const handleSave = () => {
    if (status === "" || textArea === "" || isProceed === "") {
      alert("Todos os campos são obrigatórios");
      return;
    }

    const ordemTemp = {
      ...ordem,
      status: status,
      RESOLUCAO_N2: textArea,
      FINALIZACAO: isProceed,
      operador: userName,
    };

    const update = updatedUsers.map((user: User) => {
      if (user.id === userId) {
        const updatedVtList = [...user.vtList, ordemTemp];

        return {
          ...user,
          vtList: updatedVtList,
        };
      }
      return user;
    });

    setUpdateUsers(update);
    closeModal();
  };

  return (
    <Container>
      <Header>
        <h1>Editar</h1>
        <CloseButton onClick={closeModal}>
          <CloseIcon>
            <CgCloseO />
          </CloseIcon>
        </CloseButton>
      </Header>
      <Main>
        <Item>
          <Title>OPERADOR</Title>
          <Value>
            <ItemValue>{userName}</ItemValue>
          </Value>
        </Item>
        <Item>
          <Title>VT</Title>
          <Value>
            <ItemValue>{ordem?.ORDEM}</ItemValue>
          </Value>
        </Item>
        <Item>
          <Title>CONTRATO</Title>
          <Value>
            <ItemValue>{ordem?.CONTRATO}</ItemValue>
          </Value>
        </Item>
        <Item>
          <Title>SERVIÇO</Title>
          <Value>
            <ItemValue>{ordem?.SERVICO}</ItemValue>
          </Value>
        </Item>
        <Item>
          <Title>GT</Title>
          <Value>
            <ItemValue>{ordem?.gt}</ItemValue>
          </Value>
        </Item>
        <Item>
          <Title>STATUS</Title>
          <Select value={status} onChange={handleStatusOptions}>
            <Option value="selecione">SELECIONE</Option>
            <Option value="em_tratativa">EM TRATATIVA</Option>
            <Option value="finalizado">FINALIZADO</Option>
          </Select>
        </Item>
        <Item>
          <Title>TABULAÇÃO</Title>
          <Select value={isProceed} onChange={handleIsProceed}>
            <option value="selecione">SELECIONE</option>
            <option value="procedente">PROCEDENTE</option>
            <option value="improcedente">IMPROCEDENTE</option>
          </Select>
        </Item>
        <Item istext="true">
          <Title>RESOLUÇÃO BO</Title>
          <TextContainer>
            <TextArea onChange={handleTextArea}></TextArea>
          </TextContainer>
        </Item>
        <SalveButton onClick={handleSave}>Salvar</SalveButton>
      </Main>
    </Container>
  );
};

export default Modal;
