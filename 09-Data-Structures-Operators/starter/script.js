'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  loca: 'Via Angelo Tavanti 23, Firenze, Italy',
  country: 'Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  show: function (f, s) {
    return [this.categories[f], this.mainMenu[s]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const response = [
  1,
  2,
  3,
  { cif: '123' },
  { obj1: { aNme: 'a', bName: 'b' } },
  { obj2: 'dhanesh' },
  1,
  3,
];

let [, , , demo] = response;
console.log(demo);

console.log(response.obj1);

let { mainMenu } = restaurant;
console.log(mainMenu);

//const [a, , b] = restaurant.categories;
//console.log(a, b);

const [x, y] = restaurant.show(1, 2);
console.log(x, y);

let [a, b, c] = 'ABC';
console.log(a, '=a', b, '=b');

const { name, openingHours, categories, country, loca } = restaurant;
console.log(
  'name=',
  name,
  'ophr=',
  openingHours,
  'cat=',
  categories,
  'con=',
  country
);

const user = {
  name: 'Alex',
  address: {
    area: '15th Park Avenue',
    street: 'lane1',
    city: 'avenu',
  },
  age: 43,
};

const { address: permanentAddress } = user;

console.log(permanentAddress);

const getValue = v => {
  const { [v]: value } = user;
  return value;
};

console.log(getValue('age'));

console.log('-----or----');

let ex = 0 || 'dhanesh';
console.log(ex);

console.log(0 || '' || 10 || 'dhanu');

let arrLang = ['java', 'c', 'python', 'javaScript', { mng: 10, nyt: 20 }];

for (let v of arrLang.entries()) {
  console.log(v);
}

const [, , , , objVal] = arrLang;
console.log(objVal);
