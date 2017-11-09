export const generateKeywords = (phrases) => {
  const wordMap = {};

  phrases.forEach(phrase => {
    phrase
      .split(/\s+/)
      .filter((word: string): boolean => {
        return word.length > 3;
      })
      .forEach((word: string): void => {
        const lowerCaseWord =  word.toLowerCase();
        wordMap[lowerCaseWord] = true;
      });
  });

  return Object.keys(wordMap);
};

