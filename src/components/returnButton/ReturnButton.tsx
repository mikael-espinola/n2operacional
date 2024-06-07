"use client";
import React from "react";
import { Container, LinkButton } from "./style";
import { useUser } from "@/context/UserProvider";

const ReturnButton = () => {
  const context = useUser();
  if (!context) {
    return;
  }

  const { setIsUserData } = context;
  const handleReturn = () => {
    setIsUserData(false);
  };
  return (
    <Container>
      <LinkButton onClick={handleReturn} href="/vt">
        Return
      </LinkButton>
    </Container>
  );
};

export default ReturnButton;
