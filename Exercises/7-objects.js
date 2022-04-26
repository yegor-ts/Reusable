'use strict';

const fn = () => {
  const obj = { name: 'Yegor' };
  let obj1 = { name: 'Georgius' };

  obj.name = 'John';
  obj1.name = 'Mike';

  // После инициализаци константы ей нельзя присвоить другое значение.
  // obj = { age: 20 };
  obj1 = { age: 20 };
};

module.exports = { fn };
