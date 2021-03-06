import { ExecException } from 'child_process';
import { HandErrCommands } from './../interfaces/HandErrCommands';

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
