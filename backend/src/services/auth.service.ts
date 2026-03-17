import {Injectable} from "@nestjs/common";
import {UserDto} from "../dtos/user.dto";
import {LoginRequestDto} from "../dtos/loginRequest.dto";

@Injectable()
export class AuthService {
  private readonly internalDb: UserDto[]

  constructor() {
    this.internalDb = [
      {
        id: 0,
        username: '2B',
      },
      {
        id: 1,
        username: 'A2'
      },
      {
        id: 2,
        username: '9S',
      }
    ]
  }

  async getUserById(id: number): Promise<UserDto | undefined> {
    return this.internalDb.find(user => user.id === id);
  }

  async login(data: LoginRequestDto): Promise<UserDto | undefined> {
    return this.internalDb.find(user => user.username === data.username);
  }
}
