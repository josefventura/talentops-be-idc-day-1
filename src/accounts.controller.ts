import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './accounts.service';
import type {
  AccountBalanceDto,
  AccountDto,
  OpenAccountDto,
} from './accounts.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':id/balance')
  getAccount(@Param('id') id: string): AccountBalanceDto {
    return this.accountService.getAccountBalance(id);
  }
  @Post('accounts')
  postAccount(@Body() body: OpenAccountDto): AccountDto {
    return this.accountService.createAccount(body);
  }
}
