import os from 'os';

import { OS, LibraryOS } from '../types';

export function get_os(): OS {
  const type_os = os.type() as LibraryOS;

  const conditional: { [key in LibraryOS]: OS } = {
    Windows_NT: 'window',
    Linux: 'linux',
    Darwin: 'mac',
  };

  return conditional[type_os];
}
