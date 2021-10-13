/*
export enum TypesStateSession {
  nameApplication = 'nameApplication',
  nextOrReact = 'nextOrReact',
  ifImplementTs = 'ifImplementTs',
  cleanners = 'cleanners',
  typeOf_SO = 'typeOf_SO',
}

[path_File: __dirname/interfaces/TypesStateSession.ts]
*/

export interface Questions {
  nextOrReact: 'React' | 'Next';
  ifImplementTs: boolean;
  cleanners: boolean;
  nameApplication: string;
  typeOf_SO: 'Windows' | 'Mac' | 'Linux';
}
