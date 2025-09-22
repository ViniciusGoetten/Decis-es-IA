/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository";


@Injectable()
  export class ListOptionUseCase {
     constructor(
        private readonly listOptionRepository: ListOptionRepository, 
        private readonly logger: Logger, ) {}
      
        async execute() {
      
            try {
         const option = await this.listOptionRepository.execute();
         this.logger.log('List option executed successfully');
         return option;
       } catch (error) {
         this.logger.error(error);
       }
   }
  }

