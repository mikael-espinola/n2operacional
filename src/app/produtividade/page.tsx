import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import ReturnButton from "../../components/returnButton/ReturnButton";
import users from "@/data/users";
import Table from "@/components/vtComponents/table/Table";
import { Section } from "../vt/style";
import { ButtonsContainer, Header, Saudation } from "./style";
import LogoffButton from "@/components/vtComponents/header/logoffButton/LogoffButton";
import Filters from "@/components/filters/Filters";

const page = async () => {
  const session = await getServerSession();
  const data = users.find((user) => user.user === session?.user?.email);

  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <Header>
        <h1>Produtividade Pessoal</h1>
        <Saudation>Hello, {session?.user?.name}!</Saudation>

        <ButtonsContainer>
          <ReturnButton />
          <LogoffButton />
        </ButtonsContainer>
        <Filters />
      </Header>

      <Section>
        <Table user={true} userOrdens={data?.vtList} />
      </Section>
    </div>
  );
};

export default page;
