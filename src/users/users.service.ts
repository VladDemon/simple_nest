import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async resetProblemsFlag(): Promise<number> {
    const usersWithProblems = await this.usersRepository.count({ where: { problems: true } });
    await this.usersRepository.update({ problems: true }, { problems: false });
    return usersWithProblems;
  }
}
