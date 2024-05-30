import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Produtividade Pessoal</h1>
      <button>
        <Link href="/vt">Return</Link>
      </button>
    </div>
  );
};

export default page;
