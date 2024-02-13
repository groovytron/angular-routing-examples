import { Observable } from 'rxjs';
import { User } from '../data/user.interface';

export interface UserHttpService {
  listUsers(): Observable<User[]>;
}
