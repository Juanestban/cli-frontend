import { QuestionCollection } from 'inquirer';
import { TypesStateSession } from '../interfaces/TypesTateSession';

export const questions: QuestionCollection<any> = [
  {
    type: 'input',
    name: TypesStateSession.nameApplication,
    message: 'What is the name of the project?',
    default: 'myapp',
  },
  {
    type: 'list',
    name: TypesStateSession.nextOrReact,
    message: 'what are the library/framework that you will use?',
    choices: ['React', 'Next'],
  },
  {
    type: 'confirm',
    name: TypesStateSession.ifImplementTs,
    message: 'are you wish implement typescript?',
    default: false,
  },
  {
    type: 'confirm',
    name: TypesStateSession.cleanners,
    message: 'are you install eslint, prettier and lintstaged?',
    default: true,
  },
  {
    type: 'list',
    name: TypesStateSession.typeOf_OS,
    message: 'what are you system operative?',
    choices: ['Windows', 'Mac', 'Linux'],
  },
];
