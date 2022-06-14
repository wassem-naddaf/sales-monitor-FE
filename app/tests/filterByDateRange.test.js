import { filterByDateRange } from '../utils/filters.js';

test('Check with date out of range', () => {
  const range = {
    start: '01/01/2000',
    end: '01/01/2010',
  }; // filter range date
  const date = Date.parse('01/01/2022'); // random date out of the range
  const result = filterByDateRange(range.start, range.end, date);
  expect(result).toBeFalsy();
});

test('Check with date in the range', () => {
  const range = {
    start: '01/01/2000',
    end: '01/01/2010',
  }; // filter range date
  const date = Date.parse('01/01/2009'); // random date out of the range
  const result = filterByDateRange(range.start, range.end, date);
  expect(result).toBeTruthy();
});
