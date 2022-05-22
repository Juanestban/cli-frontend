export const CreateNextAppCommand = (
  nameApp: string,
  isTypescript: boolean = false
): string => `npx create-next-app ${nameApp} ${isTypescript ? '--ts' : ''}`;
