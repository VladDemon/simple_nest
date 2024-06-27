import { Controller, Patch, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('reset-problems')
  async resetProblems(): Promise<{ count: number }> {
    const count = await this.usersService.resetProblemsFlag();
    return { count };
  }
  @Get("get")
  getHello() {
    return 10;
  }
}
