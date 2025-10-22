/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScenarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    description: string;
    // options: Option[]
}