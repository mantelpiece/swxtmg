// File excluded from repository temporarily
import { upgrades } from './upgrades-data';

import { generateKeywords } from '../lib/textUtils';

export type Upgrade = {
  id: string,
  name: string,
  category: string,
  unique: boolean,
  text: string,
  cost: number,
  keywords: string[]
};

export const UpgradeCategories = [ 'Elite', 'Modification', 'Title', 'Astromech', 'Bomb', 'Cannon', 'Crew', 'Illicit',
  'Missile', 'Salvaged Astromech', 'System', 'Tech', 'Torpedo', 'Turret', 'Cargo', 'Hardpoint', 'Team'];

upgrades.forEach(card => {
  card.keywords = generateKeywords(card.name);
});

export function getAllUpgrades(): Upgrade[] {
  return upgrades;
}

export function filterUpgrades(upgrades: Upgrade[], query: string): Upgrade[] {
  let searchPhrase = query;
  if (!(typeof query === 'string')) {
    searchPhrase = query.searchPhrase;
  }

  if (!searchPhrase || searchPhrase === '') {
    return upgrades;
  }

  if (!upgrades) {
    throw new Error('No upgrades passed to filterUpgrades');
  }

  const searchPhraseTerms = searchPhrase.toLowerCase().split(/\s+/);
  return upgrades.filter((upgrade: Upgrade): boolean => {
    return searchPhraseTerms.every((term: string): boolean => {
      return upgrade.keywords.some((keyword: string): boolean => {
        return keyword.indexOf(term) >= 0;
      });
    });
  });
}
