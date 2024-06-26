"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0.2em;
  display: flex;
  flex-direction: column;
`;

export const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5em;
  padding: 0 0.5em;
  flex-wrap: wrap;

  @media screen and (max-width: 719px) {
    justify-content: center;
  }
`;

export const MenuActions = styled.div`
  justify-content: space-evenly;
  display: flex;
  gap: 0.9em;
  align-items: center;
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  padding: 0.4em;
  height: max-content;
`;

export const ActionButton = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  height: max-content;
  text-decoration: none;
  padding: 0.1em 0.5em;
  cursor: pointer;
`;
export const ActionText = styled.span`
  font-size: 12px;
  color: #444;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;

export const Text = styled.h2`
  display: inline;
  color: #fff;
`;
