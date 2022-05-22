import { prompt } from 'inquirer';

import { gen_questions } from './models';

const run_generator = async () => {
  const result = await prompt(gen_questions);
  console.log(result);
};

export { run_generator };
