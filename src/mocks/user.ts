import faker from 'faker';
import { IUser } from 'api/user';
import Config from 'react-native-config';

export const CURRENT_USER_INFO: IUser = {
  id: 1,
  name: faker.name.firstName(),
  userName: Config.USER_NAME_DEFAULT,
  avatarUrl: faker.image.imageUrl(),
};
