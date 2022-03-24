
exports.seed = function(knex, promise) {
    return knex('recipes').insert([
      {recipe_name: 'pig pie'},
      {recipe_name: 'frito pie'},
      {recipe_name: '"minced meat"'}
    ]);
};