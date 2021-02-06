import faker from 'faker';
import { IUser } from 'api/user';

export const CURRENT_USER_INFO: IUser = {
  id: 1,
  name: faker.name.firstName(),
  avatarUrl: faker.image.imageUrl(),
};
