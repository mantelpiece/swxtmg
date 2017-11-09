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
  card.keywords = generateKeywords([ card.name, card.text ]);
});

export function getAllUpgrades() {
  return upgrades;
}

export function filterUpgrades(upgrades, params) {
  if (typeof params === 'string') {
    throw new Error('filterUpgrades must be called with a search parameter object');
  }
  if (!upgrades) {
    throw new Error('No upgrades passed to filterUpgrades');
  }

  if (params.categories && params.categories.length === 0) {
    return [];
  }

  let filteredByCategory;
  if (!params.categories) {
    filteredByCategory = upgrades.slice();
  } else {
    if (Object.keys(params.categories).length === 0) {
      filteredByCategory = upgrades.slice();
    }

    filteredByCategory = upgrades.filter((upgrade) => {
      return params.categories[upgrade.category];
    });
  }

  const searchPhrase = params.phrase;
  if (!searchPhrase || searchPhrase === '') {
    return filteredByCategory;
  }

  const searchPhraseTerms = searchPhrase.toLowerCase().split(/\s+/);
  return filteredByCategory.filter((upgrade: Upgrade): boolean => {
    return searchPhraseTerms.every((term: string): boolean => {
      return upgrade.keywords.some((keyword: string): boolean => {
        return keyword.indexOf(term) >= 0;
      });
    });
  });
}
