/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateOptionDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    scenarioId: string;
    // Scores: Score[]
}