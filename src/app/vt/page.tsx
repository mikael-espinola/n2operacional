import React from "react";
import { Container, Section } from "./style";
import Header from "@/components/vtComponents/header/Header";
import Table from "@/components/vtComponents/table/Table";

const page = () => {
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
