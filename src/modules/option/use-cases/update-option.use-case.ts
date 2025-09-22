/* eslint-disable prettier/prettier */
import { Injectable, Logger, } from '@nestjs/common';
import { UpdateOptionRepository } from '../repository';
import { UpdateOptionDto } from '../dto/update-option.dto';
@Injectable()
export class UpdateOptionUseCase {
    constructor(
        private readonly updateOptionRepository: UpdateOptionRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateOptionDto) {
        try {
            const option = await this.updateOptionRepository.update(id,data);
              this.logger.log("O Option foi atualizado com sucesso");
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
            }
            
        }
    }
