'use strict';

const phonebook = [
  { name: 'Yegor', phone: '+380445554433' },
  { name: 'Georgius', phone: '+380125009820' }
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
