"use client";
import React, { useEffect } from "react";
import { Container, Section } from "./style";
import Header from "@/components/vtComponents/header/Header";
import Table from "@/components/vtComponents/table/Table";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.isLogged) {
      router.push("/vt");
    } else {
      router.push("/");
    }
  }, []);
  return (
    <Container>
      <Header />
      <Section>
        <Table />
      </Section>
    </Container>
  );
};

export default page;
