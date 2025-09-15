/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneScenarioRepository } from '../repository/find-one-scenario.repository';

@Injectable()
export class FindOneScenarioUseCase {
    constructor(
        private readonly findoneScenarioRepository: FindOneScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const scenario = await this.findoneScenarioRepository.findone(id);
            this.logger.log("O Scenario foi encontrado com sucesso");
            if (!scenario) return new NotFoundException("Scenario não encontrado");
            return scenario;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("Scenario não encontrado");
            }
            this.logger.error(error);
            throw error;
        }
    }
}