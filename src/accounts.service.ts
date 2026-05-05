import { Injectable } from '@nestjs/common';
import { AccountDto, OpenAccountDto } from './accounts.dto';

@Injectable()
export class AccountService {
  getAccountBalance(id: string) {
    return {
      id,
      balance: 1000,
    };
  }

  createAccount(data: OpenAccountDto): AccountDto {
    return {
      id: '1',
      email: data.email,
      name: data.name,
      nationalId: data.nationalId,
      documentType: data.documentType,
    };
  }
}
