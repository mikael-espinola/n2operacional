"use client";
import React, { useState } from "react";
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
import { User } from "@/data/users";

const Modal = () => {
  const [textArea, setTextArea] = useState("");
  const [status, setStatus] = useState("");
  const [isProceed, setIsProceed] = useState("");

  const context = useUser();
  if (!context) {
    throw new Error("error");
  }
  const {
    userName,
    id,
    setIsOpen,
    userId,
    setUpdateUsers,
    updatedUsers,
    ordensList,
    setOrdensList,
  } = context;

  const ordem = ordens.find((ordem) => ordem.id === id);

  const closeModal = () => {
    setIsOpen(false);
  };

  const updateOrdensList = () => {
    const ordens = ordensList.filter((ordem) => ordem.id !== id);

    setOrdensList(ordens);
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
        updateOrdensList();
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
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <Option value="selecione">SELECIONE</Option>
            <Option value="em_tratativa">EM TRATATIVA</Option>
            <Option value="finalizado">FINALIZADO</Option>
          </Select>
        </Item>
        <Item>
          <Title>TABULAÇÃO</Title>
          <Select
            value={isProceed}
            onChange={(e) => setIsProceed(e.target.value)}
          >
            <option value="selecione">SELECIONE</option>
            <option value="procedente">PROCEDENTE</option>
            <option value="improcedente">IMPROCEDENTE</option>
          </Select>
        </Item>
        <Item istext="true">
          <Title>RESOLUÇÃO BO</Title>
          <TextContainer>
            <TextArea onChange={(e) => setTextArea(e.target.value)}></TextArea>
          </TextContainer>
        </Item>
        <SalveButton onClick={handleSave}>Salvar</SalveButton>
      </Main>
    </Container>
  );
};

export default Modal;
