/* eslint-disable prettier/prettier */
import { Injectable, Logger, } from '@nestjs/common';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';
import { UpdateScenarioRepository } from '../repository/update-scenario.repository';
@Injectable()
export class UpdateScenarioUseCase {
    constructor(
        private readonly updateScenarioRepository: UpdateScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async update(id:string, data: UpdateScenarioDto) {
        try {
            const scenario = await this.updateScenarioRepository.update(id,data);
              this.logger.log("O Scenario foi atualizado com sucesso");
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
            }
            
        }
    }
