import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Encuesta Numero 1',
  'Encuesta Numero 2',
  'Encuesta Numero 3 ',
];

const posts = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
