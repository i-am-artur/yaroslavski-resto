export function capacityUnit(unit: string, lang: string) {
  switch (unit) {
    case 'g':
      return lang === 'ua' ? 'гр' : 'g';
    case 'ball':
      return lang === 'ua' ? 'кулька' : 'ball';
    case 'ml':
      return lang === 'ua' ? 'мл' : 'ml';
    case 'qty':
      return lang === 'ua' ? 'шт' : 'qty';
    default:
      return '';
  }
}
