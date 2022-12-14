import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find({ relations: { position: true } });
  }

  findOne(uuid: string) {
    return this.usersRepository.findOneBy({
      uuid,
    });
  }

  update(uuid: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ uuid }, updateUserDto);
  }

  remove(uuid: string) {
    return this.usersRepository.delete({
      uuid,
    });
  }
}
