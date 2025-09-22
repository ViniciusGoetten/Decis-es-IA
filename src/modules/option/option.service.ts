/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, ListOptionUseCase, UpdateOptionUseCase } from './use-cases';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Injectable()
export class OptionService {
 constructor(private readonly createOptionUseCase: CreateOptionUseCase, 
  private readonly listOptionUseCase: ListOptionUseCase, 
  private readonly findoneOptionUseCase: FindOneOptionUseCase,
  private readonly updateOptionUseCase: UpdateOptionUseCase,
  private readonly deleteOptionUseCase: DeleteOptionUseCase) {} 
  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneOptionUseCase.findone(id);
  }

  update(id: string , data: UpdateOptionDto) {
    return this.updateOptionUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.delete(id);
  }
}