/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { FindOneOptionRepository } from '../repository';

@Injectable()
export class FindOneOptionUseCase {
    constructor(
        private readonly findoneOptionRepository: FindOneOptionRepository,
        private readonly logger: Logger,
    ) {}

    async findone(id:string) {
        try {
            const option = await this.findoneOptionRepository.findone(id);
            this.logger.log("O Option foi encontrado com sucesso");
            if (!option) return new NotFoundException("Scenario não encontrado");
            return option;
        } catch (error) {
            if (error instanceof NotFoundException) {
                this.logger.warn("option não encontrado");
            }
            this.logger.error(error);
            throw error;
        }
    }
}