"use client";

import Link from "next/link";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  color: #fff;
  background-color: #444;
  padding: 0.3em;
  border-radius: 5px;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
