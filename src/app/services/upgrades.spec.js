import test, { beforeEach } from 'ava';

import { generateKeywords } from '../lib/textUtils';
import { filterUpgrades, getAllUpgrades, Upgrade } from './upgrades';

export const upgrades: Upgrade[] = [{
  id: 'st',
  name: 'Swarm Tactics',
  category: 'Elite pilot talent',
  cost: '2'
}, {
  id: 'vi',
  name: 'Veteran Instincts',
  category: 'Elite pilot talent',
  cost: '1'
}];

let searchParams = {};

beforeEach(() => {
  upgrades.forEach((upgrade: Upgrade): void => {
    upgrade.keywords = generateKeywords(upgrade.name);
  });

  searchParams = {
    searchPhrase: '',
    categories: {
    }
  };
});

test('getAllUpgrades should return some upgrades', t => {
  t.is(getAllUpgrades().length > 0, true);
});

test('filterUpgrades should return everything given an empty string', t => {
  t.is(filterUpgrades(upgrades, ''), upgrades);
});

test('filterUpgrades should also accept a search params object', t => {
  t.is(filterUpgrades(upgrades, searchParams), upgrades);
});

test('filterUpgrades should return an array of upgrades whose name matches the query - single word', t => {
  t.deepEqual(filterUpgrades(upgrades, 'Veteran'), [upgrades[1]]);
});

test('filterUpgrades should be case insensitive', t => {
  t.deepEqual(filterUpgrades(upgrades, 'veteran'), [upgrades[1]]);
});

test('filterUpgrades should use a fuzzy matching', t => {
  t.deepEqual(filterUpgrades(upgrades, 'swa'), [upgrades[0]]);
});
