export interface VTItem {
  id: string;
  CONTRATO: string;
  gt: string;
  operador: string;
  status: string;
  H_RETORNO: string;
  DATA_ABERTURA: string;
  EMPRESA: string;
  CIDADE: string;
  TME: string;
  ASSUNTO: string;
  SERVICO: string;
  BAIRRO: string;
  CAMINHO: string;
  TEC: string;
  HISTÓRICO: string;
  RESOLUCAO_N2: string;
  RUA: string;
  UF: string;
  RE: string;
  H_FINALIZADA: string;
  FINALIZACAO: string;
  EDITOR_1: string;
  OP: string;
  RUIE: string;
  ORDEM: string;
}

export interface User {
  id: number;
  user: string;
  name: string;
  password: string;
  access: string;
  vtList: VTItem[];
}

const users: User[] = [
  {
    id: 0,
    user: "mikael.espinola",
    name: "Mikael Espínola",
    password: "123",
    access: "monitor",
    vtList: [
      {
        id: "sanciasubcasjkcnasn-cascasocasknsdadasc-vdvwv-wdfs",
        CONTRATO: "151512151",
        gt: "22334455",
        operador: "mikael.espinola",
        status: "none",
        H_RETORNO: "abcd123",
        DATA_ABERTURA: "2023-06-14",
        EMPRESA: "cabo",
        CIDADE: "são gonçalo do amarante",
        TME: "ijkl789",
        ASSUNTO: "mnop012",
        SERVICO: "qrst345",
        BAIRRO: "uvwx678",
        CAMINHO: "yzab901",
        TEC: "cdef234",
        HISTÓRICO: "ghij567",
        RESOLUCAO_N2: "klmn890",
        RUA: "opqr123",
        UF: "stuv456",
        RE: "wxyz789",
        H_FINALIZADA: "2024-02-20",
        FINALIZACAO: "abcd234",
        EDITOR_1: "efgh567",
        OP: "ijkl890",
        RUIE: "mnop123",
        ORDEM: "11122233",
      },
    ],
  },
  {
    id: 1,
    user: "debora.karoline",
    name: "Débora Karoline",
    password: "123",
    access: "monitor",
    vtList: [],
  },
  {
    id: 2,
    user: "alcigleydson.silva",
    name: "Alcigleydson Silva",
    password: "123",
    access: "monitor",
    vtList: [],
  },
];

export default users;
