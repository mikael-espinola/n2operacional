import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 32em;
`;
export const Columns = styled.div``;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  width: 100%;
`;

export const FixedItem = styled.div`
  font-size: 12px;
  min-width: 10em;
  text-align: center;
  padding: 0.2em;
  border: 1px solid #b1aeae;
`;

export const Items = styled.div`
  font-size: 12px;
  min-width: 10em;
  padding: 0.2em;
  border: 1px solid #b1aeae;
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
