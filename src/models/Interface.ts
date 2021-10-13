import inquirer from 'inquirer';
import { exec } from 'child_process';
import {
  CliFrontnend,
  TypesStateSession,
  Questions,
  ConditionalTecnologies,
} from '../interfaces';
import { handleErrorCommands } from '../utils/handleErrorCommad';
import { handleTypeOS } from '../utils/handleTypeSO';
import { questions } from './questions';
import { CreateReactAppCommand } from './React';
import { CreateNextAppCommand } from './NextJs';
import packageNecessary from './PackageNecessary';
import cleannersPackageAndFiles from './WithCleanners';

export default class Interface implements CliFrontnend {
  public urlNextWithoutTsWithCleanners: string =
    'https://github.com/Juanestban/next-js-personalizated.git';

  constructor() {}

  // first question
  async run(): Promise<void> {
    const answers: Questions = await inquirer.prompt(questions);
    if (answers.typeOf_OS == 'Windows') {
      console.log(
        "[+] the OS Windows posibility hasn't function for the commands used to moment install and create files"
      );
      // if posibility hasn't function correctly for OS windows
      this.results(answers);
      return;
    }
    this.results(answers);
  }

  results(answers: Questions): void {
    let tech: string;
    const { nextOrReact, ifImplementTs, cleanners, nameApplication } = answers;
    const condTech: ConditionalTecnologies = {
      React: () => CreateReactAppCommand(nameApplication, ifImplementTs),
      Next: () => CreateNextAppCommand(nameApplication, ifImplementTs),
    };
    tech = condTech[nextOrReact]();

    const allCmds: string[] = [
      tech,
      `cd ${nameApplication}`,
      ...packageNecessary,
      'echo "[+] Finished isntall"',
    ];

    if (cleanners) allCmds.push(...cleannersPackageAndFiles);

    const separator: string = handleTypeOS(
      answers[TypesStateSession.typeOf_OS]
    );

    const commandForExec: string = this.separatorsCommand(allCmds, separator);

    exec(commandForExec, handleErrorCommands);
  }

  separatorsCommand(cmds: string[], typeSeparator: string): string {
    return cmds.join(typeSeparator);
  }
}
