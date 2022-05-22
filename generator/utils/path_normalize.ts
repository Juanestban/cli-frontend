import * as path from 'path';

const root_path = process.cwd();

/**
 * @function
 * with this function we can have the root path and join with array string or string to rute that you want
 */
function path_folder(newPath: string | string[]) {
  if (Array.isArray(newPath)) {
    return path.resolve(root_path, ...newPath);
  }

  return path.resolve(root_path, newPath);
}

export default path;
export { root_path, path_folder };
