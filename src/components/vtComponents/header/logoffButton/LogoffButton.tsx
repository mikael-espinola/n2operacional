"use client";

import React, { useEffect } from "react";
import { Button } from "./style";
import { signOut } from "next-auth/react";
import nookies from "nookies";
import { useUser } from "@/context/UserProvider";

const LogoffButton = () => {
  const context = useUser();

  if (!context) {
    return;
  }

  const { isUserData } = context;

  const handleLogoff = () => {
    nookies.set(null, "isUserData", "false", {
      path: "/",
    });
    signOut();
  };

  return <Button onClick={handleLogoff}>Logoff</Button>;
};

export default LogoffButton;
