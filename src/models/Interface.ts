import inquirer, { Answers } from 'inquirer';
import { exec } from 'child_process';
import { CliFrontnend } from './../interfaces/CliFrontnend';
import { handleErrorCommands } from '../utils/handleErrorCommad';
import { TypesStateSession } from '../interfaces/TypesTateSession';
import { handleTypeSO } from '../utils/handleTypeSO';

export default class Interface implements CliFrontnend {
  public urlNextWithoutTsWithCleanners: string =
    'https://github.com/Juanestban/next-js-personalizated.git';

  constructor() {}

  // first question
  async run(): Promise<void> {
    const answers: Answers = await inquirer.prompt([
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
        name: TypesStateSession.typeOf_SO,
        message: 'what are you system operative?',
        choices: ['Windows', 'Mac', 'Linux'],
      },
    ]);
    this.results(answers);
  }

  results(answers: Answers): void {
    if (
      answers[TypesStateSession.nextOrReact] === 'Next' &&
      !answers[TypesStateSession.ifImplementTs] &&
      answers[TypesStateSession.cleanners]
    ) {
      const cmd1: string = 'npm --version';
      const cmd2: string = 'ls';
      const cmd3: string = 'node --version';
      const allCmds: string[] = [cmd1, cmd2, cmd3];
      const echo: string =
        "echo \"[+] This is de option using 'Nextjs' - 'without typescript' - 'with the prettier, eslint and lint-staged'\"";
      const separator: string = handleTypeSO(
        answers[TypesStateSession.typeOf_SO]
      );

      const commandForExec: string = this.separatorsCommand(allCmds, separator);

      console.info(echo);
      exec(commandForExec, handleErrorCommands);
      return;
    }
    console.log('not available in this momment, wait for next versions');
  }

  separatorsCommand(cmds: string[], typeSeparator: string): string {
    return cmds.join(typeSeparator);
  }
}
