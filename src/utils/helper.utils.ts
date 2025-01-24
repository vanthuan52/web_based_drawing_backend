const extractOrigin = (origins: string): string[] => {
  try {
    return origins.split(',');
  } catch (e: any) {
    return ['*'];
  }
};

export const helper = { extractOrigin };
