"use client";
import styled from "styled-components";

interface Props {
  istext?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4em;
  background-color: #444;
  width: 20em;
  border-radius: 15px;
  border-left: 4px solid #2e0765;
  color: #fff;
  height: 100%;
  overflow: auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #8731f7;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 1.3em;
  right: 2.5em;
  cursor: pointer;
  background: none;
  border: none;
`;

export const CloseIcon = styled.span`
  font-size: 2em;
  color: #fff;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.7em;
`;
export const Item = styled.div<Props>`
  width: 100%;
  padding: 0 0.3em;
  height: ${(props) => (props.istext === "true" ? "7em" : "4em")};
  &:first-child {
    margin-top: 1.5em;
  }
`;
export const Title = styled.h3`
  font-size: 12px;
`;

export const Value = styled.div`
  display: flex;
  width: 100%;
  background-color: #7d7a7a;
  border-radius: 8px;
`;

export const ItemValue = styled.span`
  font-size: 12px;
  width: 100%;
  padding: 1em;
`;
export const SalveButton = styled.button`
  padding: 1em;
  width: 100%;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0.5em;
`;

export const Select = styled.select`
  display: flex;
  width: 100%;
  height: 70%;
  padding: 0.5em;
  border-radius: 8px;
`;

export const Option = styled.option``;
