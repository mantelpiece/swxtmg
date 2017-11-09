import test, { beforeEach } from 'ava';

import { generateKeywords } from '../lib/textUtils';
import { filterUpgrades, getAllUpgrades, Upgrade } from './upgrades';

export const upgrades: Upgrade[] = [{
  id: 'st',
  name: 'Swarm Tactics',
  category: 'Elite pilot talent',
  cost: '2'
}, {
  id: 'at',
  name: 'Autothrusters',
  category: 'Modification',
  cost: '2'
}];

beforeEach(() => {
  upgrades.forEach((upgrade: Upgrade): void => {
    upgrade.keywords = generateKeywords(upgrade.name);
  });
});

test('getAllUpgrades should return some upgrades', t => {
  t.is(getAllUpgrades().length > 0, true);
});

test('filterUpgrades should accept a search params object', t => {
  t.deepEqual(filterUpgrades(upgrades, {}), upgrades);
});

test('filterUpgrades should not accept a search phrase', t => {
  t.throws(() => { filterUpgrades(upgrades, 'nope'); });
});

test('filterUpgrades should return everything given an empty string and no categories', t => {
  t.deepEqual(filterUpgrades(upgrades, { phrase: '' }), upgrades);
});

test('filterUpgrades should return an array of upgrades whose name matches the query - single word', t => {
  t.deepEqual(filterUpgrades(upgrades, { phrase: 'Veteran' }), [ upgrades[1] ]);
});

test('filterUpgrades should be case insensitive', t => {
  t.deepEqual(filterUpgrades(upgrades, { phrase: 'vEterAn' }), [ upgrades[1] ]);
});

test('filterUpgrades should use a fuzzy matching', t => {
  t.deepEqual(filterUpgrades(upgrades, { phrase: 'swa' }), [ upgrades[0] ]);
});

test('filterUpgrades should return no result if no categories are selected', t => {
  t.deepEqual(filterUpgrades(upgrades, { categories: {} }), []);
});

test('filterUpgrades should only return upgrades with a category match', t => {
  t.deepEqual(filterUpgrades(upgrades, { categories: { 'Modification': true } }), [ upgrades[1] ]);
});
