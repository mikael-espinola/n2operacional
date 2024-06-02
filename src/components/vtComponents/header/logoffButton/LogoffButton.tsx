"use client";

import React from "react";
import { Button } from "./style";
import { destroyCookie } from "nookies";

const LogoffButton = () => {
  const handleLogoff = () => {
    destroyCookie(null, "isLogged", {
      path: "/",
    });
  };
  return (
    <Button onClick={handleLogoff} href="/">
      Logoff
    </Button>
  );
};

export default LogoffButton;
