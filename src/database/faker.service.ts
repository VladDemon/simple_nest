import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async seed() {
    for (let i = 0; i < 1000000; i++) {
      const user = this.usersRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 80 }),
        gender: faker.person.gender(),
        problems: faker.datatype.boolean(),
      });
      await this.usersRepository.save(user);
    }
  }
}
