export const CreateReactAppCommand = (
  nameApp: string,
  isTypescript: boolean = false
): string =>
  `npx create-react-app ${nameApp} ${
    isTypescript ? '--template typescript' : ''
  }`;
