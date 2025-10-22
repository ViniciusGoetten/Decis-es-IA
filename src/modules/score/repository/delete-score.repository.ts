/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class DeleteScoreRepository {
    constructor(private readonly prisma: PrismaService) { }

    async delete(id:string) {
        const score = await this.prisma.score.delete({ where: { id } });
        return score;
    }
}