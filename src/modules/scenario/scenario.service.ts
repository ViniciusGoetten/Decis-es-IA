/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase } from './use-cases/create-scenario.use-case';
import { ListScenarioUseCase } from './use-cases/list-scenario.use-case';
import { FindOneScenarioUseCase, UpdateScenarioUseCase } from './use-cases';
import { DeleteScenarioUseCase } from './use-cases/delete-scenario.use-case';

@Injectable()
export class ScenarioService {
 constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
  private readonly listScenarioUseCase: ListScenarioUseCase, 
  private readonly findoneScenarioUseCase: FindOneScenarioUseCase,
  private readonly updateScenarioUseCase: UpdateScenarioUseCase,
  private readonly deleteScenarioUseCase: DeleteScenarioUseCase) {} 
  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.findone(id);
  }

  update(id: string , data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.delete(id);
  }
}