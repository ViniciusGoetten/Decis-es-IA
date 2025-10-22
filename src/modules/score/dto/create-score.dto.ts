/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateScoreDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    optionId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The title of the scenario',
        example: 'Choose the best programming language'
    })
    criterionId: string;
}