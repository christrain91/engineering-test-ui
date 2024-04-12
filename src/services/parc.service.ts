import { ApiService } from './api.service';

export interface Parc {
  id: string;
  name: string;
  description: string;
}

export class ParcService extends ApiService {
  async list() {
    return this.get<Parc[]>('parcs');
  }

  async getById (id: string) {
    return this.get<Parc>(`parcs/${id}`);
  }

  async create(parc: Omit<Parc, 'id'>) {
    return this.post<Parc>('parcs', parc);
  }

  async remove(id: string) {
    return this.delete<Parc>(`parcs/${id}`);
  }
}