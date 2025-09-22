/* eslint-disable prettier/prettier */
import { PrismaService } from "src/shared/database/prisma.database";
import { Injectable } from "@nestjs/common";
import { UpdateOptionDto } from "../dto/update-option.dto";
/* eslint-disable prettier/prettier */
@Injectable()
 export class UpdateOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id:string, data: UpdateOptionDto) {
         const option = await this.prisma.option.update({
         where: {id},
         data
    });
       return option;
}
}

