export function filterByDateRange(start, end, date) {
  if (!start || !end) return true;
  const fromDate = Date.parse(start);
  const toDate = Date.parse(end);
  if ((date <= toDate && date >= fromDate)) {
    return true;
  }
  return false;
}
