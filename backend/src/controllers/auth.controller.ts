import {Body, Controller, Get, NotFoundException, Param, Post, Res} from "@nestjs/common";
import express from "express";
import {AuthService} from "../services/auth.service";
import {UserDto} from "../dtos/user.dto";
import {ApiBody, ApiResponse, ApiTags} from "@nestjs/swagger";
import {LoginRequestDto} from "../dtos/loginRequest.dto";

@Controller('/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'The user has been successfully retrieved.', type: UserDto})
  @ApiResponse({status: 404, description: 'User not found.'})
  async getUserById(@Param('id') id: number): Promise<UserDto> {
    const user = await this.authService.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    return user;
  }

  @Post('/login')
  @ApiBody({type: LoginRequestDto})
  @ApiResponse({status: 200, description: 'The user has been successfully logged in.', type: UserDto})
  @ApiResponse({status: 404, description: 'User not found.'})
  async login(@Body() body: LoginRequestDto, @Res({passthrough: true}) res: express.Response): Promise<void> {
    const user = await this.authService.login(body);

    if (!user) {
      throw new NotFoundException(`User with username: ${body.username} not found`);
    }

    res.cookie('auth_token', 'granted', {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
    })

    res.status(200).json(user).send();
  }
}
