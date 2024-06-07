import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Main from "@/components/produtComponents/main/Main";

const page = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Main />
    </div>
  );
};

export default page;
