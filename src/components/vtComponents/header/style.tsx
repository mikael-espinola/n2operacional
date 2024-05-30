"use client";
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
`;

export const Section1 = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1em;
  padding: 0 1em;
`;

export const SearchInput = styled.input`
  border-radius: 5px;
  padding: 0.5em;
  height: max-content;
`;

export const ActionButton = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  height: max-content;
  text-decoration: none;
  padding: 0.2em;
  cursor: pointer;
`;
export const ActionText = styled.span`
  color: #444;
  &:hover {
    color: blue;
  }
`;

export const Text = styled.h2``;

export const Section2 = styled.section`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em 0;
`;

export const Filter = styled.select`
  padding: 0.5em 1em;
  font-size: 12px;
  border-radius: 5px;
`;
export const FilterOption = styled.option``;
