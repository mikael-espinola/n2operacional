import Link from "next/link";
import styled from "styled-components";

export const Button = styled(Link)`
  background-color: #fff;
  border-radius: 5px;
  height: max-content;
  text-decoration: none;
  padding: 0.2em;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #9e3636;
    color: #fff;
  }
`;
