import { Answers } from 'inquirer';

export interface CliFrontnend {
  run(): Promise<void | undefined>;
  results(answers: Answers): void;
}
