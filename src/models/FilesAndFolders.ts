const folders: string[] = [
  'components/{Atoms,Molecules,Organisms}',
  'contexts',
  'config',
  'hooks',
];

export const cmdCreateFolders: string[] = folders.map(
  (folder) => `mkdir -p ${folder}`
);
