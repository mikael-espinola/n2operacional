"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    const cookies = parseCookies();
    if (cookies.isLogged) {
      router.push("/produtividade");
    } else {
      router.push("/");
    }
  }, []);

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
