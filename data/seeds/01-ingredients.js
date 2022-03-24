
exports.seed = function(knex) {
    return knex('ingredients').insert([
      {ingredient_name: 'orange juice'},
      {ingredient_name: 'leg of horse'},
      {ingredient_name: 'fake crab meat'},
      {ingredient_name: 'ranch'},
      {ingredient_name: 'cool ranch'}
    ]);
};