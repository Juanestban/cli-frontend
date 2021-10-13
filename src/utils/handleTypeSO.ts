import {
  SystemOperatives,
  systemOperativeEnum,
} from '../interfaces/SystemOperatives';

export const handleTypeOS = (so: SystemOperatives): string => {
  const conditionals = {
    [systemOperativeEnum.Windows]: ' ; ',
    [systemOperativeEnum.Mac]: ' && ',
    [systemOperativeEnum.Linux]: ' && ',
    default: 'error in digit system operative',
  };

  return conditionals[so] ?? conditionals.default;
};
