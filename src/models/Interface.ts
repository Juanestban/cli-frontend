import inquirer, { Answers } from 'inquirer';
import { exec } from 'child_process';
import { handleErrorCommands } from '../utils/handleErrorCommad';

const types = {
  0: 'nextOrReact',
  1: 'ifImplementTs',
  2: 'cleanners',
};

export default class Interface {
  public urlNextWithoutTsWithCleanners: string =
    'https://github.com/Juanestban/next-js-personalizated.git';

  constructor() {}

  // first question
  async run(): Promise<void> {
    const answers: Answers = await inquirer.prompt([
      {
        type: 'list',
        name: types[0],
        message: 'what are the library/framework that you will use?',
        choices: ['React', 'Next'],
      },
      {
        type: 'confirm',
        name: types[1],
        message: 'are you wish implement typescript?',
        default: false,
      },
      {
        type: 'confirm',
        name: types[2],
        message: 'are you install eslint, prettier and lintstaged?',
        default: true,
      },
    ]);
    this.results(answers);
  }

  results(answers: Answers): void {
    if (
      answers[types[0]] === 'Next' &&
      !answers[types[1]] &&
      answers[types[2]]
    ) {
      // const command: string = `git clone ${this.urlNextWithoutTsWithCleanners}`;
      const command = 'npm --version && dir && node --version';

      exec(command, handleErrorCommands);
      return;
    }
    console.log('not available in this momment, wait for next versions');
  }
}
