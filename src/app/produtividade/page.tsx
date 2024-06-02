import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import ReturnButton from "./returnButton/ReturnButton";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Produtividade Pessoal</h1>
      <h4>Hello, {session?.user?.name}</h4>
      <ReturnButton />
    </div>
  );
};

export default page;
