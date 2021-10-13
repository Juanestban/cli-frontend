import { TypesStateSession } from '../interfaces/TypesTateSession';
import {
  SystemOperatives,
  systemOperativeEnum,
} from '../interfaces/SystemOperatives';

export const handleTypeSO = (so: SystemOperatives): string => {
  console.log(so);
  const conditionals = {
    [systemOperativeEnum.Windows]: ';',
    [systemOperativeEnum.Mac]: '&&',
    [systemOperativeEnum.Linux]: '&&',
    default: 'error in digit system operative',
  };

  return conditionals[so] ?? conditionals.default;
};
