import { upgradeCards } from './upgradeCards';
import { generateKeywords } from '../utils/textUtils';

export type Upgrade = {
  id: string,
  name: string,
  text: string,
  keywords: string[]
};

upgradeCards.forEach(card => {
  card.keywords = generateKeywords(card.name);
});

export function getAllUpgrades(): Upgrade[] {
  return upgradeCards;
}

export function filterUpgrades(upgrades: Upgrade[], query: string): Upgrade[] {
  if (!query || query === '') {
    return upgrades;
  }

  if (!upgrades) {
    throw new Error('No upgrades passed to filterUpgrades');
  }

  const queryTerms = query.toLowerCase().split(/\s+/);
  return upgrades.filter((upgrade: Upgrade): boolean => {
    return queryTerms.every((queryTerm: string): boolean => {
      return upgrade.keywords.some((keyword: string): boolean => {
        return keyword.indexOf(queryTerm) >= 0;
      });
    });
  });
}
