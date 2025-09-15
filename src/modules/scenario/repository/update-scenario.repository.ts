/* eslint-disable prettier/prettier */
import { PrismaService } from "src/shared/database/prisma.database";
import { UpdateScenarioDto } from "../dto/update-scenario.dto";
import { Injectable } from "@nestjs/common";

/* eslint-disable prettier/prettier */
@Injectable()
 export class UpdateScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id:string, data: UpdateScenarioDto) {
         const scenario = await this.prisma.scenario.update({
         where: {id},
         data
    });
       return scenario;
}
}

