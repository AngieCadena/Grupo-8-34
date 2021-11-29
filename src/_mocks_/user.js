import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),

 
  name: sample([
    'Celia Angarita',
    'Ricardo Quevedo',
    'Catalina Rivera',
    'Miguel Pineda',
    'Julio Duarte',
    'Andrea Luna',
    'Juliana Reyes',
    'Nini Soto',
    'Estella Machado',
    'William Suarez'
  ]),
  company: sample([
    '7º - 11º',
    '8º',
    '10º - 11º',
    '10º - 11º',
    '6º - 9º',
    '6º - 9º',
    '10º - 11º', 
    '8º - 11º',
    '6º - 11º',
    '6º - 11']),
  status: sample(['activo', 'vacaciones']),
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
