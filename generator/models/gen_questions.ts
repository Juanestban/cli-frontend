import { QuestionCollection } from 'inquirer';

import { _type_generator_schema } from '../enums';

/**
 * TODO: this will change, right now just we'll support the create react component
 */
export const gen_questions: QuestionCollection<any> = [
  {
    type: 'input',
    name: _type_generator_schema.GEN_COMPONENT,
    message: '☕ What will be the name of component?',
    default: 'MyComponent',
  },
];
