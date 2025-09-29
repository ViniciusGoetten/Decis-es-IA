/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { CreateOptionRepository } from '../repository/create-option.repository';
import { CreateOptionDto } from '../dto/create-option.dto';

@Injectable()
export class CreateOptionUseCase {
    constructor(
        private readonly createOptionRepository: CreateOptionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(data: CreateOptionDto){
        try {
            const option = this.createOptionRepository.create(data);
            this.logger.log('Optio created successfully');
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}