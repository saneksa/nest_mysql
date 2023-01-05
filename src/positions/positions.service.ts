import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>,
  ) {}
  create(createPositionDto: CreatePositionDto) {
    return this.positionRepository.save(createPositionDto);
  }

  findAll() {
    return this.positionRepository.find();
  }

  findOne(uuid: string) {
    return this.positionRepository.findOneBy({ uuid });
  }

  update(uuid: string, updatePositionDto: UpdatePositionDto) {
    return this.positionRepository.update({ uuid }, updatePositionDto);
  }

  remove(uuid: string) {
    return this.positionRepository.delete({ uuid });
  }
}
