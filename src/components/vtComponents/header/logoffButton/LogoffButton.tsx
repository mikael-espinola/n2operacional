"use client";

import React from "react";
import { Button } from "./style";
import { signOut } from "next-auth/react";
import { destroyCookie } from "nookies";

const LogoffButton = () => {
  const handleLogoff = () => {
    destroyCookie({}, "isUserData", {
      path: "/",
    });

    signOut();
  };

  return <Button onClick={handleLogoff}>Sair</Button>;
};

export default LogoffButton;
