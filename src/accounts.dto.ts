export type OpenAccountDto = {
  email: string;
  password: string;
  name: string;
  nationalId: string;
  documentType: string;
};

export type AccountDto = {
  id: string;
  email: string;
  name: string;
  nationalId: string;
  documentType: string;
};

export type AccountBalanceDto = {
  id: string;
  balance: number;
};
