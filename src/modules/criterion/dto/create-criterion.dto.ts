/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateCriterionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    weight: number;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    active: boolean;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    createdAt: Date;
    // Scores: Score[];
}