import { prompt } from 'inquirer';

import { gen_questions } from './models';
import { Answer, TypeFile } from './types';
import { Gen_file } from './components';

import './utils/pipe';

const run_generator = async () => {
  const { FRONTEND_SCHEMA_WILL_BE_USE, GENERATOR_COMPONENT, ..._ }: Answer =
    await prompt(gen_questions);

  if (FRONTEND_SCHEMA_WILL_BE_USE && GENERATOR_COMPONENT) {
    const filename = GENERATOR_COMPONENT;
    const type_file = FRONTEND_SCHEMA_WILL_BE_USE as TypeFile;

    Gen_file(filename, type_file);
  }
};

export { run_generator };
