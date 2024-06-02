"use client";

import React from "react";
import { Button } from "./style";
import { signOut } from "next-auth/react";

const LogoffButton = () => {
  return <Button onClick={() => signOut()}>Logoff</Button>;
};

export default LogoffButton;
