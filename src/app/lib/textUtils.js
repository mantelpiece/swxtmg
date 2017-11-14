export const generateKeywords = (phrases) => {
  const wordMap = {};

  phrases.forEach(phrase => {
    phrase
      .split(/\s+/)
      // I'm not convinced this is worthwhile.
      // .filter((word: string): boolean => {
        // return word.length > 2;
      // })
      .forEach((word: string): void => {
        const lowerCaseWord =  word.toLowerCase();
        wordMap[lowerCaseWord] = true;
      });
  });

  return Object.keys(wordMap);
};
