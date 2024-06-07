import React from "react";
import { Container, Section } from "./style";
import Header from "@/components/vtComponents/header/Header";
import Table from "@/components/table/Table";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

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
