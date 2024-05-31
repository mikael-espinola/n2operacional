"use client";

import React from "react";
import { Button } from "./style";

const LogoffButton = () => {
  const handleLogoff = () => {
    localStorage.removeItem("logged");
  };
  return (
    <Button onClick={handleLogoff} href="/">
      Logoff
    </Button>
  );
};

export default LogoffButton;
