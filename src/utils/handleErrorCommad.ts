import { HandErrCommands } from './../interfaces/HandErrCommands';
import { ExecException } from 'child_process';

export const handleErrorCommands = (
  error: ExecException | null,
  stdout: string,
  stderr: string
): HandErrCommands | undefined => {
  if (error) {
    console.log(error);
    return;
  }
  if (stdout) {
    console.log(stdout);
    return;
  }
  console.log(stderr);
};
