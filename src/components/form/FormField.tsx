"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Attention, Button, Container, Form, LoginInput, Text } from "./style";
import users from "../../data/users";
import { useRouter } from "next/navigation";

const FormField = () => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isUserCorrent, setIsUserCorrent] = useState(false);
  const router = useRouter();

  const data = users;

  useEffect(() => {
    console.log("carregamento correto");
  }, []);

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    validateCredentials();
  };

  const validateCredentials = () => {
    const currentUser = data.find((user) => user.user === userName);
    if (currentUser?.password === password) {
      const user = {
        id: `${currentUser?.id}`,
        name: currentUser?.user,
        logged: "true",
      };
      localStorage.setItem("logged", JSON.stringify(user));
      router.push("/vt");
      return;
    }
    errorCredentials();
  };

  const errorCredentials = () => {
    setIsUserCorrent(true);
    setTimeout(() => {
      setIsUserCorrent(false);
    }, 3000);
  };
  return (
    <Container>
      <Text>N2 OPERACIONAL</Text>
      {isUserCorrent && (
        <Attention>Credentials error. Check and try again.</Attention>
      )}
      <Form onSubmit={handleLogin}>
        <LoginInput
          onChange={(event) => setUserName(event.target.value)}
          placeholder="user"
          type="text"
        />
        <LoginInput
          onChange={(event) => setPassword(event.target.value)}
          placeholder="******************"
          type="password"
        />
        <Button onSubmit={handleLogin}>Sign In</Button>
      </Form>
    </Container>
  );
};

export default FormField;
