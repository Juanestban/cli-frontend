import inquirer from 'inquirer';
import ora from 'ora';
import {
  CliFrontnend,
  TypesStateSession,
  Questions,
  ConditionalTecnologies,
} from '../interfaces';
import { handleTypeOS } from '../utils/handleTypeSO';
import { questions } from './questions';
import { CreateReactAppCommand } from './React';
import { CreateNextAppCommand } from './NextJs';
import { shellExec } from './ShellExec';
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
    const spinner = ora({
      text: 'Installing the project...',
      discardStdin: false,
    });
    const { nextOrReact, ifImplementTs, cleanners, nameApplication } = answers;
    const condTech: ConditionalTecnologies = {
      React: () => CreateReactAppCommand(nameApplication, ifImplementTs),
      Next: () => CreateNextAppCommand(nameApplication, ifImplementTs),
    };
    tech = condTech[nextOrReact]();
    spinner.start();

    const allCmds: string[] = [
      tech,
      `cd ${nameApplication}`,
      ...packageNecessary,
    ];

    if (cleanners)
      allCmds.push(...cleannersPackageAndFiles(nextOrReact === 'React'));

    const separator: string = handleTypeOS(
      answers[TypesStateSession.typeOf_OS]
    );

    const commandForExec: string = this.separatorsCommand(allCmds, separator);

    shellExec(commandForExec, () => {
      // console.clear();
      spinner.succeed('Finished isntall the project!');
    });
  }

  separatorsCommand(cmds: string[], typeSeparator: string): string {
    return cmds.join(typeSeparator);
  }
}
