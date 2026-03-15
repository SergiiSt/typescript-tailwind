import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LoginRequestDto {
  @IsString()
  @ApiProperty({ example: '2B' })
  username: string;

  @IsString()
  @ApiProperty({ example: 'password123' })
  password: string;
}
