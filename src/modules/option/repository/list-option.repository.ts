/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
 export class ListOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async execute() {
         const option = await this.prisma.option.findMany();
         return option;
    }
 }