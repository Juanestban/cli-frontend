import { _type_generator_schema } from '../enums';

export type Answer = {
  [key_schema in _type_generator_schema]?: string;
};
