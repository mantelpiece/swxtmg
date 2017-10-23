export const generateKeywords = (phrase: string): string[] => {
  const wordMap = {};
  phrase
    .split(/\s+/)
    .filter((word: string): boolean => {
      return word.length > 3;
    })
    .forEach((word: string): void => {
      const lowerCaseWord =  word.toLowerCase();
      wordMap[lowerCaseWord] = true;
    });

  return Object.keys(wordMap);
};

