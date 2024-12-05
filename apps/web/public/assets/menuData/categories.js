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
  { id: 16, name: { en: 'Fish dishes', ua: 'Рибні страви' }, parentId: 4 },
  { id: 17, name: { en: 'Meat dishes', ua: 'М`ясні страви' }, parentId: 4 },
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
];
