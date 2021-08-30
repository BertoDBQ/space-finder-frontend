import { User, UserAttribute } from '../model/Model';

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === 'user' && password === '1234') {
      return {
        userName: userName,
        email: 'xxxx@gmail.com',
      };
    } else {
      return undefined;
    }
  }

  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({ Name: 'Iowa', Value: 'Hawkeyes' });
    result.push({ Name: 'Wisconsin', Value: 'Badgers' });
    result.push({ Name: 'Northwester', Value: 'Wildcats' });
    result.push({ Name: 'Minnesota', Value: 'Golden Gophers' });
    result.push({ Name: 'Illinois', Value: 'Fighting Illni' });
    return result;
  }
}
