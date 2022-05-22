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
  {
    type: 'list',
    name: _type_generator_schema.FRONTEND_SCHEMA_WILL_BE_USE,
    message: 'what is the library frontend that you be using?',
    choices: ['react', 'vue', 'svelte'],
  },
  {
    type: 'list',
    name: _type_generator_schema.GEN_TYPE_CSS_USE,
    message: '',
    choices: ['css', 'css-module', 'styled-components'],
  },
];
