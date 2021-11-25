import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'EvaluaCión de Profesores',
];

const posts = [...Array(1)].map((_, index) => ({
 
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index],
  createdAt: faker.date.recent(),
  author: {
    
    avatarUrl: `/static/mock-images/avatars/lapiz-${index + 1}.png`
  }
}));

export default posts;
