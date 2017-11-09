import test from 'ava';

import { generateKeywords } from './textUtils';

test('generateUpgradeKeywords should create an array of keywords from a string', t => {
  const phrase = 'This is A phrase';
  const actual = generateKeywords([ phrase ]);
  t.true(Array.isArray(actual));
  t.true(actual.length > 0);
});

test('generateKeywords should lowercase words', t => {
  const phrase = 'Upper CRust NamIng';
  const actual = generateKeywords([ phrase ]);
  const expected = ['upper', 'crust', 'naming'];
  t.deepEqual(actual, expected);
});

test('generateKeywords should drop words shorter than four characters', t => {
  const phrase = 'yes no name';
  const actual = generateKeywords([ phrase ]);
  const expected = ['name'];
  t.deepEqual(actual, expected);
});

test('generateKeywords should drop duplicate words', t => {
  const phrase = 'name frank name strange';
  const actual = generateKeywords([ phrase ]);
  const expected = ['name', 'frank', 'strange'];
  t.deepEqual(actual, expected);
});
