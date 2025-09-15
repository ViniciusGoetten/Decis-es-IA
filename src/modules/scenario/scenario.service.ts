/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/list-scenario.use-case';
import { FindOneScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
 constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
  private readonly listScenarioUseCase: ListScenarioUseCase, 
  private readonly findoneScenarioUseCase: FindOneScenarioUseCase) {} 
  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.findone(id);
  }

  update(id: number,updateScenarioDto: UpdateScenarioDto) {
    return `This action updates a #${id} scenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} scenario`;
  }
}
