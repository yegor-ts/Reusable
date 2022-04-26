'use strict';

const phonebook = {
  Yegor: '+380445554433',
  Georgius: '+380125009820'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
