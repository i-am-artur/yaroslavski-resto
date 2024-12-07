// TODO: create function that checks if no double ids (Can product have more that one parent?)
export const categories = [
  //--------------------------------------
  { id: 1, name: { en: 'Appetizers', ua: 'Закуски' }, parentId: null },
  { id: 2, name: { en: 'Soups', ua: 'Суп' }, parentId: null },
  { id: 3, name: { en: 'Salads', ua: 'Салати' }, parentId: null },
  { id: 4, name: { en: 'Main dishes', ua: 'Основні страви' }, parentId: null },
  { id: 5, name: { en: 'Barbecue', ua: 'Мангал' }, parentId: null },
  { id: 6, name: { en: 'Khachapuri', ua: 'Хачапурі' }, parentId: null },
  { id: 7, name: { en: 'Pizza', ua: 'Піца' }, parentId: null },
  { id: 30, name: { en: 'Drinks', ua: 'Напитки' }, parentId: null },

  // ------------- Appetizers -------------
  { id: 8, name: { en: 'Cold Appetizers', ua: 'Холодні закуски' }, parentId: 1 },
  { id: 9, name: { en: 'Hot Appetizers', ua: 'Гарячі закуски' }, parentId: 1 },
  { id: 10, name: { en: 'Beer snacks', ua: 'Закуски до пива' }, parentId: 1 },
  // ------------- Soups -------------
  { id: 11, name: { en: 'Hot soups', ua: 'Гарячі супи' }, parentId: 2 },
  { id: 12, name: { en: 'Cold Soups', ua: 'Холодні супи' }, parentId: 2 },

  // ------------- Salads -------------
  { id: 13, name: { en: 'Vegetable salads', ua: 'Овочеві салати' }, parentId: 3 },
  { id: 14, name: { en: 'Meat salads', ua: 'М`ясні салати' }, parentId: 3 },
  { id: 15, name: { en: 'Fish salads', ua: 'Рибні салати' }, parentId: 3 },

  // ------------- Main dishes -------------
  { id: 16, name: { en: 'Meat dishes', ua: 'М`ясні страви' }, parentId: 4 },
  { id: 17, name: { en: 'Fish dishes', ua: 'Рибні страви' }, parentId: 4 },
  { id: 18, name: { en: 'Side dishes', ua: 'Гарніри' }, parentId: 4 },

  // ------------- Barbecue -------------
  {
    id: 19,
    name: { en: 'Vegetables on the grill', ua: 'Овочі на мангалі' },
    parentId: 5,
  },
  { id: 20, name: { en: 'Grilled fish', ua: 'Мангал риба' }, parentId: 5 },
  { id: 21, name: { en: 'Barbecue pork', ua: 'Мангал свинина' }, parentId: 5 },
  { id: 22, name: { en: 'Barbecue bird', ua: 'Мангал птиця' }, parentId: 5 },
  {
    id: 23,
    name: {
      en: 'Barbecue veal, lamb and assorted',
      ua: 'Мангал телятина баранина та асорті',
    },
    parentId: 5,
  },
  {
    id: 24,
    name: { en: 'Sauces', ua: 'Соуси' },
    parentId: 5,
  },

  // ------------- Khachapuri -------------
  { id: 25, name: { en: 'Adjarian Khachapuri', ua: 'Аджарский' }, parentId: 6 },
  { id: 26, name: { en: 'Megrelian Khachapuri', ua: 'Мегрельський' }, parentId: 6 },
  {
    id: 27,
    name: { en: 'Puff pastry Khachapuri', ua: 'Пеновани-листковий' },
    parentId: 6,
  },
  { id: 28, name: { en: 'Lazuri Khachapuri', ua: 'Лазурі' }, parentId: 6 },
  { id: 29, name: { en: 'Yarilo Branded', ua: 'Ярило фірмовий' }, parentId: 6 },

  // ------------- Pizza -------------

  // ------------- Drinks -------------
  { id: 32, name: { en: 'Adjarian Khachapuri', ua: 'Безалкогольные' }, parentId: 30 },
  { id: 31, name: { en: 'Adjarian Khachapuri', ua: 'Алкогольные' }, parentId: 30 },

  // ------------- Алкогольные -------------
  { id: 33, name: { en: 'Adjarian Khachapuri', ua: 'Слабоалкоголные ' }, parentId: 31 },
  {
    id: 34,
    name: { en: 'Adjarian Khachapuri', ua: 'Крепкие-алкгольные ' },
    parentId: 31,
  },
  { id: 36, name: { en: 'Adjarian Khachapuri', ua: 'Вино ' }, parentId: 31 },
  { id: 37, name: { en: 'Adjarian Khachapuri', ua: 'Коктейли ' }, parentId: 31 },

  // ------------- Слабоалкоголные -------------
  { id: 38, name: { en: 'Adjarian Khachapuri', ua: 'Пиво кеговое' }, parentId: 33 },
  { id: 39, name: { en: 'Adjarian Khachapuri', ua: 'Пиво бутылочное' }, parentId: 33 },
  {
    id: 40,
    name: { en: 'Adjarian Khachapuri', ua: 'Сидр ROYAL ZOLOTONOSHA' },
    parentId: 33,
  },

  // ------------- Крепкие-алкгольные -------------
  { id: 41, name: { en: 'Adjarian Khachapuri', ua: 'Виски' }, parentId: 34 },
  { id: 42, name: { en: 'Adjarian Khachapuri', ua: 'Джин' }, parentId: 34 },
  { id: 43, name: { en: 'Adjarian Khachapuri', ua: 'Текила' }, parentId: 34 },
  {
    id: 44,
    name: { en: 'Adjarian Khachapuri', ua: 'Ликеры/Настойки/Вермуты' },
    parentId: 34,
  },
  { id: 45, name: { en: 'Adjarian Khachapuri', ua: 'Ром' }, parentId: 34 },
  { id: 46, name: { en: 'Adjarian Khachapuri', ua: 'Коньяк та Бренди' }, parentId: 34 },
  { id: 47, name: { en: 'Adjarian Khachapuri', ua: 'Водка' }, parentId: 34 },

  // ------------- Безалкогольные -------------
  { id: 50, name: { en: 'Adjarian Khachapuri', ua: 'Холодные' }, parentId: 32 },
  { id: 51, name: { en: 'Adjarian Khachapuri', ua: 'Горячие' }, parentId: 32 },

  // ------------- Холодные -------------
  {
    id: 52,
    name: { en: 'Adjarian Khachapuri', ua: 'Собственное производство' },
    parentId: 50,
  },
  {
    id: 53,
    name: { en: 'Adjarian Khachapuri', ua: 'Сладкие напитки и вода' },
    parentId: 50,
  },

  // ------------- Горячие -------------
  { id: 54, name: { en: 'Adjarian Khachapuri', ua: 'Кофе' }, parentId: 51 },
  { id: 55, name: { en: 'Adjarian Khachapuri', ua: 'Чай' }, parentId: 51 },

  // ------------- Собственное производство -------------
  {
    id: 56,
    name: { en: 'Adjarian Khachapuri', ua: 'Натуральні Лимонади' },
    parentId: 52,
  },
  {
    id: 57,
    name: { en: 'Adjarian Khachapuri', ua: 'Свіжовичавлений сік' },
    parentId: 52,
  },

  // ------------- Виски -------------
  {
    id: 58,
    name: { en: 'Adjarian Khachapuri', ua: 'Віскі Ірландський' },
    parentId: 41,
  },
  {
    id: 59,
    name: { en: 'Adjarian Khachapuri', ua: 'Шотландський Віскі' },
    parentId: 41,
  },
  {
    id: 60,
    name: { en: 'Adjarian Khachapuri', ua: 'Віскі США' },
    parentId: 41,
  },
];
