import { exec, ExecException } from 'child_process';
import { handleErrorCommands } from '../utils/handleErrorCommad';

export const shellExec = async (
  command: string,
  finishedPromise: (response: any) => void
): Promise<any> =>
  new Promise<void | any>((fulfill, reject) => {
    let statusError: boolean = false;
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          handleErrorCommands(error, stdout, stderr);
          reject(new Error('[-] error to execute this command'));
          statusError = true;
          return;
        }
        if (!statusError) fulfill({ status: 'finished' });
        finishedPromise({ status: 'finished' });
        return;
      }
    );
  }).catch((err) => {
    exec(`Error: ${err.message}`);
    return;
  });
