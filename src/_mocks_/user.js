import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Docente de ciencias sociales',
    'Docente de álgebra',
    'Docente de química',
    'Docente de física',
    'Docente de geometría',
    'Docente de biología',
    'Docente de cálculo',
    'Docente de historia',
    'Docente de Español',
    'Docente de inglés'
    
  ])
}));

export default users;
