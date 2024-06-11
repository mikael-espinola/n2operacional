"use client";
import React from "react";
import { Container } from "./style";
import nookies from "nookies";
import { ActionButton } from "../vtComponents/header/style";

const ReturnButton = () => {
  const handleReturn = () => {
    nookies.set({}, "isUserData", "false", {
      path: "/",
    });
  };

  return (
    <Container>
      <ActionButton onClick={handleReturn} href="/vt">
        <span>Voltar</span>
      </ActionButton>
    </Container>
  );
};

export default ReturnButton;
