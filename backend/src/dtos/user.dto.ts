import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UserDto {
  @IsString()
  @ApiProperty({ example: '2B' })
  username: string;

  @IsNumber()
  @ApiProperty({ example: 0 })
  id: number;
}
