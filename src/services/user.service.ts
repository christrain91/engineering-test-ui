import { ApiService } from './api.service';

export interface User {
  id: string;
  name: string;
  email: string;
}

export class UserService extends ApiService {
  async list() {
    return this.get<User[]>('users');
  }

  async getById (id: string) {
    return this.get<User>(`users/${id}`);
  }

  async create(user: Omit<User, 'id'>) {
    return this.post<User>('users', user);
  }

  async remove(id: string) {
    return this.delete<User>(`users/${id}`);
  }
}