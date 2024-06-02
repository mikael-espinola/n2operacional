"use client";
import React, { FormEvent, useEffect, useState } from "react";
import {
  Attention,
  Button,
  Container,
  Form,
  Loader,
  LoginInput,
  Text,
} from "./style";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { PropagateLoader } from "react-spinners";

const FormField = () => {
  const [isUserCorrent, setIsUserCorrent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = {
      user: formData.get("user"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/vt",
    });
  };

  useEffect(() => {
    if (error === "CredentialsSignin") {
      setIsLoading(false);
      setIsUserCorrent(true);
      setTimeout(() => {
        setIsUserCorrent(false);
      }, 2100);
    }
  }, [error]);

  return (
    <Container>
      <Text>N2 OPERACIONAL</Text>
      {isUserCorrent && (
        <Attention>Credentials error. Check and try again.</Attention>
      )}
      <Form onSubmit={handleLogin}>
        <LoginInput placeholder="user" type="text" name="user" />
        <LoginInput
          placeholder="******************"
          name="password"
          type="password"
        />
        <Button type="submit">
          {isLoading ? (
            <Loader>
              <PropagateLoader
                style={{ display: "flex", alignItems: "center" }}
                color="#444"
              />
            </Loader>
          ) : (
            "Sign In"
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default FormField;
